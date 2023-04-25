const express=require('express');
const { Register, Login, LogOut } = require('../../controller/userController');

const router=express.Router();

router.post('/register',Register);
router.post('/login',Login);
router.get('/logout',LogOut);

module.exports=router;