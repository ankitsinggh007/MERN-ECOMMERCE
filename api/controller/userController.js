const productService = require("../services/productService");
const userService = require("../services/userService");

const userservice=new userService();

const Register=async (req, res, next)=>{
    try {
        const response=await userservice.Create(req.body);
        return res.status(201).json({
            success:true,
            message:"user is succesfully registered",
            response:response,
            error:{}
        })

    } catch (error) {
        return res.status(400).json({
            success:false,
            message:`${error.message}`,
            response:[],
            error:error
        })
    }
}

const Login=async (req,res,next)=>{
    try {
        const response=await userservice.login(req.body);

        return res.status(200).json({
            success:true,
            message:"user is succesfully login",
            response:response,
            error:{}
        })

    } catch (error) {
        return res.status(400).json({
            success:false,
            message:`${error.message}`,
            response:[],
            error:error
        })
    }
}
const LogOut=async (req,res,next)=>{
    try {
        const response=await userservice.loggout(req.body);

        return res.status(201).json({
            success:true,
            message:"user is succesfully loggout",
            response:response,
            error:{}
        })

    } catch (error) {
        return res.status(400).json({
            success:false,
            message:`${error.message}`,
            response:[],
            error:error
        })
    }
}



module.exports={
    LogOut,Login,Register
}