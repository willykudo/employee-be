import ResignNoticeModel from "../models/resignNotice.model.js";
import BaseController from "./base.controller.js";

class ResignNoticeController extends BaseController {
    constructor() {
        super(ResignNoticeModel);
    }
}

const resignNoticeController = new ResignNoticeController();
export default resignNoticeController;