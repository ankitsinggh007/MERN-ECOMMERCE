const express=require('express');
const { getItem, getAllItem, createItem, removeItem, updateItem } = require('../../controller/productContorller');
const { isAuthenticated, isAutherized } = require('../../middleware/Authentication');

const routers=express.Router();

routers.get('/:id',getItem);
routers.get('/',getAllItem);
routers.post('/',isAuthenticated,isAutherized('admin'),createItem);
routers.delete('/:id',isAuthenticated,isAutherized('admin'),removeItem);
routers.put('/:id',isAuthenticated,isAutherized('admin'),updateItem);

module.exports=routers;