import express from "express";
import userController from "../controllers/user.controller.js";
import { multerUpload } from "../services/awsFile.service.js";
import { isRole } from "../middlewares/auth.middleware.js";

const userRoutes = express.Router();


// FILTER GENDER 
userRoutes.get("/comunity", async (req, res, next) => {
    await userController.getComunityClub(req, res, next)
})

// GET ORGANIZATION STRUCTURE
userRoutes.get("/organization", async (req, res, next) => {
    await userController.getOrganization_structure(req, res, next);
})

// GET USER DATA RETURN 
userRoutes.get("/checkToken", async (req, res, next) => {

    await userController.returnDataUser(req, res, next);
});

userRoutes.get("/", async (req, res, next) => {
    await userController.getData_aggregate(req, res, next);
});

userRoutes.get("/:uId", async (req, res, next) => {
    await userController.getOne_data(req, res, next);
});

userRoutes.post("/", isRole(["Admin", "Supervisor"]), multerUpload.fields([{ name: "photo", maxCount: 1 }]), async (req, res, next) => {
    await userController.create_user(req, res, next);
});

userRoutes.put("/:uId", isRole(["Admin", "Supervisor"]), multerUpload.fields([{ name: "photo", maxCount: 1 }]), async (req, res, next) => {
    await userController.update_user(req, res, next);
});

userRoutes.delete("/:uId", isRole(["Admin", "Supervisor"]), async (req, res, next) => {
    await userController.delete(req, res, next);
});

export default userRoutes;