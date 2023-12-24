import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
    try {
        const { name, email, password, address } = req.body;

        // Validation
        if (!name || !email || !password || !address) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
            });
        }

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists',
            });
        }

        // Register user
        const hashedPassword = await hashPassword(password);

        // Save user
        const user = await new userModel({
            name,
            email,
            password: hashedPassword,
            address,
        }).save();

        return res.status(201).json({
            success: true,
            message: 'User registration successful',
            data: user,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Error in registration',
            error: err.message,
        });
    }
};


export const loginController = async (req, res) => {
    try{
        const {email,password} = req.body;
        //validation
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            });
        }
        //check if user exists
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User does not exist"
            });
        }
        const match = await comparePassword(password,user.password);
        if(!match){
            return res.status(401).json({
                success:false,
                message:"Invalid credentials"
            });
        }
        //generate token
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});
        //send token
        return res.status(200).json({
            success:true,
            message:"Login successful",
            user:{
                name:user.name,
                email:user.email
            },
            token
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Error in login",
            error:err.message
        });
    }
};

export const testController = (req, res) => {
    res.send('Proteced route');
};