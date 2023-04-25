const mongoose = require("mongoose");
const  validator = require('validator');
const bcrypt=require('bcryptjs');
const userSchema=new mongoose.Schema({

    name:{
        type:String,
        maxLength:20,
        minLength:[3,"please provide a full name "],
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        validate:[validator.isEmail,'please provide a correct email address']
    },
    password:{
        type:String,
        required:[true,"please provide your password"]
    },
    // avatar:{
    //     public_id:{
    //         type:String,
    //         required:true,
    //     },
    //     url: {
    //         type: String,
    //         required: true,
    //       },

    // },
    role:{
        type:String,
        default:'user',
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

userSchema.pre('save',async function(){
    const salt= await bcrypt.genSalt(10);
    if(this.isModified('password')){
       this.password=await bcrypt.hash(this.password, salt);
    }
});

userSchema.methods.comparePassword = async function(password){
    try{
        return await bcrypt.compare(password, this.password);
    }catch(error){
        console.log(error,"error");
    }
}


module.exports=mongoose.model('User',userSchema);