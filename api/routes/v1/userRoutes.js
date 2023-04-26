const express=require('express');
const { Register, Login, LogOut, forgotPassword } = require('../../controller/userController');

const router=express.Router();

router.post('/register',Register);
router.post('/login',Login);
router.get('/logout',LogOut);
router.post('/resetPassword',forgotPassword);

module.exports=router;