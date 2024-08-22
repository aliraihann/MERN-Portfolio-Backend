import { Router } from "express";
import User from "../models/userModel";

const router = Router();

/* admin login */
router.post("/login-admin", async (req, res) => {
  try {
    const user = User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (user) {
      res.status(200).send({
        data: user,
        success: true,
        message: "Login successfully",
      });
    } else {
      res.status(400).send({
        data: user,
        success: false,
        message: "Invalid username or password",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});


export default router;