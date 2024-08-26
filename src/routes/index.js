import express from "express";
import commonRoutes from "./common.route.js";
import userRoutes from "./user.route.js";
import companyRoutes from "./company.route.js";
import locationRoutes from "./location.route.js";
import locationEmployeeStatus from "./employeeStatus.route.js";
import locationEvent from "./event.route.js";
import locationUserInformation from "./userInformation.route.js";
import locationNoticeResign from "./resignNotice.route.js";
import locationAuth from "./auth.route.js";
import { isAuthorized } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use("/api/common", commonRoutes);
router.use("/api/user", isAuthorized, userRoutes);
router.use("/api/company", isAuthorized, companyRoutes)
router.use("/api/location", isAuthorized, locationRoutes)
router.use("/api/employeeStatus", isAuthorized, locationEmployeeStatus)
router.use("/api/event", isAuthorized, locationEvent)
router.use("/api/userInformation", isAuthorized, locationUserInformation)
router.use("/api/resignNotice", isAuthorized, locationNoticeResign)

router.use("/api/auth", locationAuth)

export default router;