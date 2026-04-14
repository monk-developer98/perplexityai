import express from "express";
import { loginValidator, registerValidator } from "../validators/auth.validator.js";
import { getMe, login, register, verifyEmail } from "../controllers/auth.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";

const authRouter =express.Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 * @body { username, email, password }
 */

authRouter.post("/register" , registerValidator ,register)

/**
 * @route POST /api/auth/Login
 * @desc  user can login
 * @access Public
 * @body {email, password }
 */
authRouter.post("/login" , loginValidator , login)

/**
 * @route GET /api/auth/get-me
 * @desc  get Current Logged in user's details 
 * @access Private
 */
authRouter.get("/get-me" ,authUser ,getMe )

/**
 * @route GET /api/auth/verify-email
 * @desc  Verify user's email adddress
 * @access Public
 * @body {token}
 */
authRouter.get("/verify-email" ,verifyEmail )



export default authRouter