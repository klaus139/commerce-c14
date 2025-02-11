import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name is required"]
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:[true, "Password is required"],
        minLength:[6, "Password must be atleast 6 characters long"]
    },
    role:{
        type:String,
        enum:["customer", "admin"],
        default:"customer"
    },
    cartItems:[
        {
            quantity:{
                type:Number,
                default:1
            },
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Product"
            },
        }
    ],


},
{
    timestamps:true,
})

const User = mongoose.model("User", userSchema);

export default User;

   