const express=require('express');
const { getItem, getAllItem, createItem, removeItem, updateItem } = require('../../controller/productContorller');
const { isAuthenticated, isAutherized } = require('../../middleware/Authentication');

const routers=express.Router();

routers.get('/:id',getItem);
routers.get('/',isAuthenticated,isAutherized('admin'),getAllItem);
routers.post('/',createItem);
routers.delete('/:id',removeItem);
routers.put('/:id',updateItem);

module.exports=routers;