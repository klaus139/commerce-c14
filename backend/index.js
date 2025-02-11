import express from "express";
import dotenv from "dotenv";
dotenv.config()
import { connectDB } from "./database/db.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", authRoutes);

connectDB();

const port = process.env.PORT

app.get('/test', (req, res) => {
    res.send("testing my server")
});

//we call this an endpoint
// app.post('/register', (req, res) => {
//     res.status(201).json({
//         message:"user registered successfully"
//     })
// })


// app.post('/login', (req, res) => {
//     res.status(200).json({
//         message:"user logged in successfully"
//     })
// })

app.listen(port,()=> {
    console.log(`server is running on port ${port}`)
})