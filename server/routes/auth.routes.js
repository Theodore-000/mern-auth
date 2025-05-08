import { Router } from "express";
import {
  logIn,
  logOut,
  signUp,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const authRouter = Router();

authRouter.get("/check-auth", verifyToken, checkAuth);
authRouter.post("/signup", signUp);
authRouter.post("/verify-email", verifyEmail);
authRouter.post("/login", logIn);
authRouter.post("/logout", logOut);

authRouter.post("/forgot-password", forgotPassword);
authRouter.post("/reset-password/:token", resetPassword);

export default authRouter;
