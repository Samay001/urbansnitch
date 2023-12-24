import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20,
        trim: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        // maxLength: 20
    },
    address:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:0
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now(),
    }
});

export default mongoose.model('users', userSchema);