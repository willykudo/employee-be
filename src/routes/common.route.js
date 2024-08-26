import express from "express";
import cscController from "../controllers/csc.controller.js";


const commonEvent = express.Router();

commonEvent.get("/csc", async (req, res, next) => {
  await cscController.getAll(req, res, next);
});

commonEvent.get("/lang", async (req, res, next) => {
  await cscController.getLanguageList(req, res, next)
})


export default commonEvent;