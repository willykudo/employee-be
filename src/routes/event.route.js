import express from "express";
import eventController from "../controllers/event.controller.js";
import { multerUpload } from "../services/awsFile.service.js";

const locationEvent = express.Router();

locationEvent.get("/", async (req, res, next) => {
    await eventController.get_all_event(req, res, next);
});

locationEvent.get("/:uId", async (req, res, next) => {
    await eventController.getById(req, res, next);
});

locationEvent.post("/", multerUpload.fields([{ name: "posterAttachment", maxCount: 1 }]), async (req, res, next) => {
    await eventController.create_event(req, res, next);
});

locationEvent.put("/:uId", multerUpload.fields([{ name: "posterAttachment", maxCount: 1 }]), async (req, res, next) => {
    await eventController.update_event(req, res, next);
});

locationEvent.delete("/:uId", async (req, res, next) => {
    await eventController.delete(req, res, next);
});

export default locationEvent;