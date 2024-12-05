import express from "express";

import * as userController from "../controllers/userController.js";

const router = express.Router();


router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);

export default router;
