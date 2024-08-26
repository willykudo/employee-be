import CompanyModel from '../models/company.model.js'
import BaseController from './base.controller.js';
import { uploadFile } from '../services/awsFile.service.js'

class CompanyController extends BaseController {
    constructor() {
        super(CompanyModel);
    }

    async create_company(req, res, next) {

        try {
            const { uenNumber } = req.body;

            // Cek UEN already registered
            const existingUser = await this.model.findOne({ uenNumber });
            if (existingUser) {
                return res.status(500).json({
                    msg: "Company already registered!",
                });
            }

            // UPLOAD IMAGE
            const file = req.files.companyImage[0];

            // UPLOAD LOCATION PATH IMAGE
            const upload = await uploadFile(file);

            const createdData = await this.model.create({ ...req.body, companyImage: upload.Location });

            if (!createdData) {
                throw customizeError(400, "Create data failed");
            }

            return res.status(200).json({ data: createdData });
        } catch (error) {
            next(error);
        }
    }

    async update_company(req, res, next) {

        try {
            const { uId } = req.params;

            const company = await this.model.findOne({ uId })

            if (!company) {
                return res.status(500).json({
                    msg: "Company Id is Not Found !"
                })
            }

            let updateFields = {};

            // Define the fields that can be updated
            const fields = ['uenNumber', 'companyName', 'address', 'employeeHeadCount', 'industryField', 'notes', 'phoneNumber', 'postalCode', 'country'];

            // Loop through each field and check if it exists in the request body
            fields.forEach(field => {
                if (req.body[field]) {
                    updateFields[field] = req.body[field];
                }
            });

            if (req.files && req.files["companyImage"]) {
                const file = req.files.companyImage[0];

                const upload = await uploadFile(file);

                updateFields['companyImage'] = upload.Location
            }

            // Perform update only if there are fields to update
            if (Object.keys(updateFields).length > 0) {
                const updatedData = await this.model.findOneAndUpdate({ uId }, updateFields, { new: true });

                res.status(200).json({
                    data: updatedData
                });
            } else {
                // If no fields are updated, return existing data
                res.status(200).json({
                    data: existingData
                });
            }

        } catch (error) {
            next(error)
        }
    }

}

const companyController = new CompanyController();
export default companyController;