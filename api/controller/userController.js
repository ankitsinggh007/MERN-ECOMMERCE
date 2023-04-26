const productService = require("../services/productService");
const userService = require("../services/userService");
const sendEmail=require('../utils/passwordRecover')

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
        
        const option={
            expires: new Date(
                Date.now()+process.env.Expire_Cokies*24*60*60*1000
            ),
            httpOnly: true,
        };
        return res.status(200)
        .cookie('token',response,option)
        .json({
            success:true,
            message:"user is succesfully login",
            response:response,
            error:{}
        })

    } catch (error) {
        return res.status(400)
        .json({
            success:false,
            message:`${error.message}`,
            response:[],
            error:error
        })
    }
}
const LogOut=async (req,res,next)=>{
    try {
        // const response=await userservice.loggout();

        const option={
            expires: new Date(
                Date.now()
            ),
            httpOnly: true,
        };
        return res.status(201).cookie('token',null,option).json({
            success:true,
            message:"user is succesfully loggout",
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
const forgotPassword=async (req,res,next)=>{
try {
    
    const {email}=req.body;
    if(!email)throw new Error("Please enter your email");

    const User=await userservice.findUser({email});
    
    if(!User) throw new Error("Please enter correct password");
    console.log(User);
    const resetToken=User.genResetPasswordToken();

        User.save();
        const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/password/reset/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;
  await sendEmail({
    email: User.email,
    subject: `Ecommerce Password Recovery`,
    message,
  });
  res.status(200).json({
    success: true,
    message: `Email sent to ${User.email} successfully`,
  });


} catch (error) {
    // User?.resetPasswordToken = undefined;
    // User?.resetPasswordExpire = undefined;

    // await User?.save({ validateBeforeSave: false });

    return res.status(400).json({
        success:false,
        message:`${error.message}`,
        response:[],
        error:error
    })
}

}



module.exports={
    LogOut,Login,Register,forgotPassword
}