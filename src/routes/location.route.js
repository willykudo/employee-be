import express from "express";
import locationController from "../controllers/location.controller.js";
import { isRole } from "../middlewares/auth.middleware.js";

const locationRoutes = express.Router();

locationRoutes.get("/",  async (req, res, next) => {
    await locationController.get_location(req, res, next);
});

locationRoutes.get("/:uId", async (req, res, next) => {
    await locationController.getById(req, res, next);
});

locationRoutes.post("/", isRole(["Admin"]), async (req, res, next) => {
    await locationController.create(req, res, next);
});

locationRoutes.put("/:uId", isRole(["Admin"]), async (req, res, next) => {
    await locationController.update(req, res, next);
});

locationRoutes.delete("/:uId", isRole(["Admin"]), async (req, res, next) => {
    await locationController.delete(req, res, next);
});

export default locationRoutes;