import User from "../model/userModel.js";
import bcrypt from "bcryptjs"

export const SignUp = async(req, res) => {
    try{
        //try to register a user
        const {name, email, password} = req.body;
        //validation
        if(!name || !email || !password){
            return res.status(400).json({
                message:"Please provide all the required fields"
            })
        }

        //check if the user already exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message:"email already exist"
            })
        }

        //encrypt the password 
        const hashedPassword = await bcrypt.hash(password, 10);

        //register the user
        const newUser = await User.create({name, email, password:hashedPassword});

        /// TODO create access token
        // TODO store the refreshtoken
        //TODO set cookies

        return res.status(201).json({
            message:"User registered successfully",
            data:newUser
        })



    }catch(error){
        console.log(`Error in signup controller ${error.message}`)
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}