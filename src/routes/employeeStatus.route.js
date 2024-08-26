import express from "express";
import employeeStatusController from "../controllers/employeeStatus.controller.js";
import { isRole } from "../middlewares/auth.middleware.js";

const locationEmployeeStatus = express.Router();

locationEmployeeStatus.get("/", async (req, res, next) => {
    await employeeStatusController.get_employeeStatus(req, res, next);
});

locationEmployeeStatus.get("/:uId", async (req, res, next) => {
    await employeeStatusController.getById(req, res, next);
});

locationEmployeeStatus.post("/", isRole(["Admin"]), async (req, res, next) => {
    await employeeStatusController.create(req, res, next);
});

locationEmployeeStatus.put("/:uId", isRole(["Admin"]), async (req, res, next) => {
    await employeeStatusController.update(req, res, next);
});

locationEmployeeStatus.delete("/:uId", isRole(["Admin"]), async (req, res, next) => {
    await employeeStatusController.delete(req, res, next);
});

export default locationEmployeeStatus;