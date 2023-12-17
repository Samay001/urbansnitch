import userModel from "../models/userModel.js";
import { hashPassword } from "../helpers/authHelper.js";

export const registerController = async (req,res) => {
    try{
        const{name,email,password,address} = req.body;
        //validation
        if(!name || !email || !password || !address){
            return res.status(400).send({
                success: false,
                message: 'All fields are required'
            });
        }

        //check user
        const existingUser = await userModel.findOne({email});
        //existing user check
        if(existingUser){
            return res.status(400).send({
                success: false,
                message: 'User already exists'
            });
        }

        //register user
        const hashedPassword = await hashPassword(password);
        //save
        const user = await new userModel({
            name,
            email,
            password: hashedPassword,
            address
        }).save();

        res.status(201).send({
            success: true,
            message: 'User Registration Successful',
            data: user
        });
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            err,
        });
    }
};