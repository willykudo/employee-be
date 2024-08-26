import express from "express";
import companyController from "../controllers/company.controller.js";
import { multerUpload } from '../services/awsFile.service.js'
import { isRole } from "../middlewares/auth.middleware.js";

const companyRoutes = express.Router();

companyRoutes.get("/", async (req, res, next) => {
    await companyController.getAll(req, res, next);
});

companyRoutes.get("/:uId", async (req, res, next) => {
    await companyController.getById(req, res, next);
});

companyRoutes.post("/", isRole(["Admin"]), multerUpload.fields([{ name: "companyImage", maxCount: 1 }]), async (req, res, next) => {
    await companyController.create_company(req, res, next);
});

companyRoutes.put("/:uId", isRole(["Admin"]), multerUpload.fields([{ name: "companyImage", maxCount: 1 }]), async (req, res, next) => {
    await companyController.update_company(req, res, next);
});

companyRoutes.delete("/:uId", isRole(["Admin"]), async (req, res, next) => {
    await companyController.delete(req, res, next);
});

export default companyRoutes;