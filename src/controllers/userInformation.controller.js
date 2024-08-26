import UserInformationModel from "../models/userInformation.model.js";
import BaseController from "./base.controller.js";
import { uploadFile } from '../services/awsFile.service.js'

class UserInformationController extends BaseController {
    constructor() {
        super(UserInformationModel);
    }

    async create_userInformation(req, res, next) {
        let educationToJson;

        // CREATE DATA IN UPDATE
        if (educationToJson) {
            educationToJson = JSON.parse(req.body.education);
        }
        const employeementDetailToJson = JSON.parse(req.body.employeementDetail);
        const identificationDocumentToJson = JSON.parse(req.body.identificationDocument);
        const paymentDetailToJson = JSON.parse(req.body.paymentDetail);
        const hobbies = JSON.parse(req.body.hobbies)
        const skills = JSON.parse(req.body.skills)
        const languages = JSON.parse(req.body.languages)


        identificationDocumentToJson.attachments = []

        try {
            // UPLOAD FILE OBJECT INSIDE OBJECT
            const files = req.files["attachments"]
            // console.log(files)

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const upload = await uploadFile(file);

                const dataImage = {
                    name: upload.Key.replace('uploads/', ''),
                    link: upload.Location
                }

                identificationDocumentToJson.attachments.push(dataImage)
            }

            const createdData = await this.model.create({
                hobbies,
                skills,
                languages,
                identificationDocument: identificationDocumentToJson,
                education: educationToJson ? educationToJson : null,
                employeementDetail: employeementDetailToJson,
                paymentDetail: paymentDetailToJson
            });

            if (!createdData) {
                throw customizeError(400, "Create data failed");
            }

            return res.status(200).json({ data: createdData });
        } catch (error) {
            next(error);
        }

    }

    async update_userInformation(req, res, next) {
        const { uId } = req.params;

        const employeementDetail = req.body["employeementDetail"] && JSON.parse(req.body["employeementDetail"])
        const identificationDocument = req.body["identificationDocument"] && JSON.parse(req.body["identificationDocument"])
        const paymentDetail = req.body["paymentDetail"] && JSON.parse(req.body["paymentDetail"])
        const education = req.body["education"] && JSON.parse(req.body["education"])
        const hobbies = req.body.hobbies && JSON.parse(req.body.hobbies)
        const skills = req.body.skills && JSON.parse(req.body.skills)
        const languages = req.body.languages && JSON.parse(req.body.languages)

        try {
            const existingData = await this.model.findOne({ uId });

            if (!existingData) {
                return res.status(500).json("User Information Not Found !");
            }

            const updatedData = {
                ...existingData.toObject(),
                hobbies: hobbies || existingData.hobbies,
                skills: skills || existingData.skills,
                languages: languages || existingData.languages,
                employeementDetail: {
                    ...existingData.employeementDetail,
                    ...employeementDetail
                },
                identificationDocument: {
                    ...existingData.identificationDocument,
                    ...identificationDocument
                },
                paymentDetail: {
                    ...existingData.paymentDetail,
                    ...paymentDetail
                },
                education: {
                    ...existingData.education,
                    ...education
                }
            };

            if (req.files && req.files["attachments"]) {
                const files = req.files["attachments"];
                let existingAttachments = existingData.identificationDocument.attachments || [];

                // Stores the names of existing files in an array
                const existingFileNames = existingAttachments.map(attachment => attachment.name);

                // Stores the names of the currently uploaded files in an array
                const newFileNames = files.map(file => file.originalname);

                // Check which files should be deleted
                const filesToDelete = existingAttachments.filter(attachment => !newFileNames.includes(attachment.name));

                // Delete files that no longer exist from existingAttachments
                for (const fileToDelete of filesToDelete) {
                    const index = existingAttachments.indexOf(fileToDelete);
                    existingAttachments.splice(index, 1);
                }

                // Add a new file that does not yet exist
                for (const file of files) {
                    if (!existingFileNames.includes(file.originalname)) {
                        const upload = await uploadFile(file);

                        const dataImage = {
                            name: upload.Key.replace('uploads/', ''),
                            link: upload.Location
                        };

                        existingAttachments.push(dataImage);
                    }
                }

                // Only update attachments if there are changes
                updatedData.identificationDocument = {
                    ...existingData.identificationDocument,
                    attachments: existingAttachments
                };
            }

            const updateEmployee = await this.model.findOneAndUpdate({ uId }, { $set: updatedData }, { new: true });

            return res.status(200).json({ data: updateEmployee });


        } catch (error) {
            next(error);
        }
    }

}

const userInformationController = new UserInformationController();
export default userInformationController;

