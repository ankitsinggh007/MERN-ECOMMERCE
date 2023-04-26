const express=require('express');
const { Register, Login, LogOut, forgotPassword, getUserDeatils,updateUserDetails } = require('../../controller/userController');
const { isAuthenticated } = require('../../middleware/Authentication');

const router=express.Router();

router.post('/register',Register);
router.post('/login',Login);
router.get('/logout',LogOut);
router.post('/resetPassword',forgotPassword);
router.get('/profile',isAuthenticated,getUserDeatils);
router.put('/update_profile',isAuthenticated,updateUserDetails);
module.exports=router;