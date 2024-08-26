import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import env from 'dotenv'
import nodeMailer from 'nodemailer'
import BaseController from "./base.controller.js";
import UserModel from "../models/user.model.js";
import CompanyModel from "../models/company.model.js";
import { uploadFile } from "../services/awsFile.service.js";
env.config()


class RegisterEmployee extends BaseController {

    constructor() {
        super(UserModel);
    }

    async createRegisterEmployee(req, res, next) {
        try {
            const { email, password } = req.body;

            // Cek Email already registered
            const existingUser = await this.model.findOne({ email });
            if (existingUser) {
                return res.status(500).json({
                    msg: "Email already registered!",
                });
            }

            const genSalPasword = await bcrypt.genSalt();

            // Hash Password
            const hashPassword = await bcrypt.hash(password, genSalPasword);

            // UPLOAD IMAGE
            const file = req.files.photo[0];
            const upload = await uploadFile(file);

            const dataImage = {
                name: upload.Key.replace('uploads/', ''),
                link: upload.Location
            }

            const createdData = await this.model.create({ ...req.body, password: hashPassword, photo: dataImage });

            if (!createdData) {
                throw customizeError(400, "Create data failed");
            }

            // PAYLOAD MUST BE CONVER TO OBJECT
            const payLoad = createdData.toObject()

            if (payLoad && payLoad.password) {
                delete payLoad.password;
            }

            const expired = "1d"

            // CREATE TOKEN
            const accessToken = jwt.sign(payLoad, process.env.JWT_SECRET, {
                expiresIn: expired,
            });

            return res.status(200).json({ payLoad: payLoad, token: accessToken, expired });
        } catch (error) {
            next(error)
        }
    }

}

class RegisterCompany extends BaseController {
    constructor() {
        super(CompanyModel)
    }

    async createRegisterCompany(req, res, next) {
        try {
            const { uenNumber } = req.body;

            // Cek Company already registered
            const existingCompany = await this.model.findOne({ uenNumber });
            if (existingCompany) {
                return res.status(500).json({
                    msg: "Company already registered!",
                });
            }

            // UPLOAD IMAGE
            const file = req.files.companyImage[0];

            const upload = await uploadFile(file);

            const dataImage = {
                name: upload.Key.replace('uploads/', ''),
                link: upload.Location
            }

            const createdData = await this.model.create({ ...req.body, companyImage: dataImage });

            if (!createdData) {
                throw customizeError(400, "Create data failed");
            }

            return res.status(200).json({ data: createdData });
        } catch (error) {
            next(error)
        }
    }
}

class LoginController extends BaseController {

    constructor() {
        super(UserModel);
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;

            const userExist = await this.model.findOne({ email });

            if (!userExist) {
                return res.status(500).json({ msg: "Email Not Found!" });
            }

            const passwordMatch = await bcrypt.compare(password, userExist.password);

            if (!passwordMatch) {
                return res.status(500).json({ msg: "Wrong Password!" });
            }

            const uId = userExist.uId;

            // CONDITION TO GET LOCATION SUPERVISOR
            const roleSupervisor = userExist.role.includes("Supervisor");

            let resultPipeline;

            // AGGREGATE WITH UID IF SUPERVISOR EXIST
            if (roleSupervisor) {
                const pipeline = [
                    { $match: { userInformationID: { $ne: null }, uId: uId } },
                    {
                        $lookup: {
                            from: 'userinformations',
                            localField: 'userInformationID',
                            foreignField: 'uId',
                            as: 'userInformation'
                        }
                    },
                    { $unwind: { path: '$userInformation', preserveNullAndEmptyArrays: true } },

                    // LOCATION
                    {
                        $match: {
                            'userInformation.employeementDetail.locations': { $ne: null }
                        }
                    },
                    // DO LOOKUP MORE
                    {
                        $lookup: {
                            from: 'locations',
                            localField: 'userInformation.employeementDetail.locations',
                            foreignField: 'uId',
                            as: 'locations'
                        }
                    },
                    { $unwind: { path: '$locations', preserveNullAndEmptyArrays: true } },
                ];

                const aggregateLocation = await this.model.aggregate(pipeline).exec();
                const result = aggregateLocation[0].locations;

                resultPipeline = {
                    organizationID: userExist.organizationID,
                    userInformationID: userExist.userInformationID,
                    uId: userExist.uId,
                    locationID: aggregateLocation && result.uId,
                    locationName: aggregateLocation && result.locationName,
                    color: aggregateLocation && result.color,
                    department: aggregateLocation && result.departments?.[0].department,
                    firstName: userExist.firstName,
                    lastName: userExist.lastName,
                    role: userExist.role,
                    photo: userExist.photo,
                    email: userExist.email,
                    reportTo: userExist.reportTo
                };
            }

            // Convert createdData to plain object
            const userDoc = userExist.toObject()

            const expired = "1d";
            const payLoad = roleSupervisor ? resultPipeline : userDoc;

            // CREATE TOKEN
            const accessToken = jwt.sign(payLoad, process.env.JWT_SECRET, {
                expiresIn: expired,
            });

            return res.status(200).json({ msg: "Login Success", token: accessToken, payLoad: payLoad, expired: expired });
        } catch (error) {
            next(error);
        }
    }

}

class ForgotPassword {

    generatedToken = (user) => {
        const jwtSecret = process.env.JWT_SECRET;
        return jwt.sign({ user }, jwtSecret, { expiresIn: "5m" })
    }

    async forgot(req, res, next) {
        try {
            const { email } = req.body

            // 1. GET USER BASE ON POST EMAIL
            const user = await UserModel.findOne({ email })

            if (!user) {
                return res.status(500).json({
                    msg: "This email has not been registered!"
                })
            }

            // 2. GENERATE A RANDOM RESET TOKEN
            const token = this.generatedToken(user)

            // 3. SEND THE TOKEN BACK TO THE USER EMAIL 
            const resetLink = `http://localhost:3000/resetPassword/${user.uId}/${token}`

            const transporter = nodeMailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.NODE_USER,
                    pass: process.env.NODE_PASS
                }
            })

            const emailContent = `
                <h1>TimHut</h1>
                <h2>Halo... ${user.userName},</h2>
                <p>Click the link below to reset your password</p>
                <a href='${resetLink}'>Reset Password</a>
            `;

            // WHAT? SEND TO EMAIL
            const emailOptions = {
                from: `TimHut`,
                to: user.email,
                subject: "Reset Your Password!",
                html: emailContent,
            };

            transporter.sendMail(emailOptions, (error, info) => {
                if (error) {
                    res.status(500).json({ message: 'Failed to send reset email' });
                } else {
                    res.json({ message: 'Reset email sent successfully' });
                }
            })
        } catch (error) {
            next(error)
        }

    }

    // FOR FRONTEND CEK PROTECTED DOM
    // app.get("/reset-password/:id/:token", async (req, res) => {
    //     const { id, token } = req.params;
    //     console.log(req.params);
    //     const oldUser = await User.findOne({ _id: id });
    //     if (!oldUser) {
    //       return res.json({ status: "User Not Exists!!" });
    //     }
    //     const secret = JWT_SECRET + oldUser.password;
    //     try {
    //       const verify = jwt.verify(token, secret);
    //       res.render("index", { email: verify.email, status: "Not Verified" });
    //     } catch (error) {
    //       console.log(error);
    //       res.send("Not Verified");
    //     }
    //   });

    async resetPassword(req, res, next) {
        const { uId, token } = req.params;
        const { password } = req.body;

        try {
            const oldUser = await UserModel.findOne({ uId })

            if (!oldUser) {
                return res.json({ msg: "User Not Exist!" })
            }

            const secretKey = process.env.JWT_SECRET;

            jwt.verify(token, secretKey, (err, decoded) => {
                if (err) {
                    return res.status(500).json({
                        msg: "Invalid Token"
                    })
                }
            });

            const encryptPassword = await bcrypt.hash(password, 10)

            const update = await UserModel.findOneAndUpdate({ uId }, { password: encryptPassword }, { new: true })

            if (!update) {
                return res.status(500).json({
                    msg: "Email Not Found, Please Register!"
                })
            }

            res.status(200).json({
                msg: "Password Updated"
            })

        } catch (error) {
            next(error)
        }

    }
}

const loginController = new LoginController();
const registerCompanyController = new RegisterCompany();
const registerEmployeeController = new RegisterEmployee();
const forgotPasswordController = new ForgotPassword();
export { registerEmployeeController, registerCompanyController, loginController, forgotPasswordController }