import express from "express";
import userInformationController from "../controllers/userInformation.controller.js";
import { multerUpload } from '../services/awsFile.service.js'
import { isRole } from "../middlewares/auth.middleware.js";

const locationUserInformation = express.Router();

locationUserInformation.get("/", async (req, res, next) => {
    await userInformationController.getAll(req, res, next);
});

locationUserInformation.get("/:uId", async (req, res, next) => {
    await userInformationController.getById(req, res, next);
});

locationUserInformation.post("/", isRole(["Admin", "Supervisor"]), multerUpload.fields([{ name: "attachments", maxCount: 5 }]), async (req, res, next) => {
    await userInformationController.create_userInformation(req, res, next);
});

locationUserInformation.put("/:uId", isRole(["Admin", "Supervisor"]), multerUpload.fields([{ name: "attachments", maxCount: 5 }]), async (req, res, next) => {
    await userInformationController.update_userInformation(req, res, next);
});

locationUserInformation.delete("/:uId", isRole(["Admin", "Supervisor"]), async (req, res, next) => {
    await userInformationController.delete(req, res, next);
});

export default locationUserInformation;