import express from "express";
import { googleAuth, signin, signup } from "../controllers/auth.js";

const router = express.Router();

//CREATE A USER
router.post("/signup", async (req, res, next) => {
  await signup(req, res, next);
});

//SIGN IN
router.post("/signin", async (req, res, next) => {
  await signin(req, res, next);
});

//GOOGLE AUTH
router.post("/google", async (req, res, next) => {
  await googleAuth(req, res, next);
});

export default router;
