const express=require('express');
const { getItem, getAllItem, createItem, removeItem, updateItem } = require('../../controller/productContorller');

const routers=express.Router();

routers.get('/:id',getItem);
routers.get('/',getAllItem);
routers.post('/',createItem);
routers.delete('/:id',removeItem);
routers.put('/:id',updateItem);

module.exports=routers;