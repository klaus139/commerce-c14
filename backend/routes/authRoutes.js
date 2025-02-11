import express from "express"
import { SignUp } from "../controller/authController.js";

const router = express.Router();

router.post('/register', SignUp)

router.post('/login', (req, res) => {
    res.status(200).json({
        message:"user logged in successfully"
    })
})

export default router;