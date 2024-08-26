import express from 'express'
import { registerEmployeeController, registerCompanyController, loginController, forgotPasswordController } from '../controllers/auth.controller.js';
import { multerUpload } from '../services/awsFile.service.js';

const locationAuth = express.Router()

locationAuth.post("/registerEmployee", multerUpload.fields([{ name: "photo", maxCount: 1 }]), async (req, res, next) => {
    await registerEmployeeController.createRegisterEmployee(req, res, next)
});

locationAuth.post("/registerCompany", multerUpload.fields([{ name: "companyImage", maxCount: 1 }]), async (req, res, next) => {
    await registerCompanyController.createRegisterCompany(req, res, next)
});

locationAuth.post("/login", async (req, res, next) => {
    await loginController.login(req, res, next);
});

// FORGOT PASSWORD 

locationAuth.post("/forgotPassword", async (req, res, next) => {
    await forgotPasswordController.forgot(req, res, next)
})

locationAuth.post("/resetPassword/:uId/:token", async (req, res, next) => {
    await forgotPasswordController.resetPassword(req, res, next)
})

export default locationAuth;