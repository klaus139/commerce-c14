import express from "express"

const router = express.Router();

router.post('/register', (req, res) => {
    res.status(201).json({
        message:"user registered successfully"
    })
})

router.post('/login', (req, res) => {
    res.status(200).json({
        message:"user logged in successfully"
    })
})

export default router;