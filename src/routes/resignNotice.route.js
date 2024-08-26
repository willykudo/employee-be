import express from "express";
import resignNoticeController from "../controllers/resignNotice.controller.js";
import { isRole } from "../middlewares/auth.middleware.js";

const locationNoticeResign = express.Router();

locationNoticeResign.get("/", async (req, res, next) => {
    await resignNoticeController.getAll(req, res, next);
});

locationNoticeResign.post("/", isRole(["Admin"]), async (req, res, next) => {
    await resignNoticeController.create(req, res, next)
})

locationNoticeResign.get("/:uId", async (req, res, next) => {
    await resignNoticeController.getById(req, res, next);
});

locationNoticeResign.put("/:uId", isRole(["Admin"]), async (req, res, next) => {
    await resignNoticeController.update(req, res, next);
});

export default locationNoticeResign;