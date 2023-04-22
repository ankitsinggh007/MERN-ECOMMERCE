
const express=require('express');
const ProductRoute=require('./ProductRoutes');
const routers = express.Router();

routers.use('/product',ProductRoute);

module.exports=routers;
