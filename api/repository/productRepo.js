const Product = require("../models/Product");

class ProductRepo {


   async Create(data){
    try {
    const response=await Product.create(data) ;
        return response;
    } catch (error) {
        throw error;
    }
   }
   async Delete(id){
    try {
    const response=await Product.findByIdAndDelete(id);
        return response;
    } catch (error) {
        throw error;
    }
   }
   async Update(id,data){
    try {
    const response=await Product.findByIdAndUpdate(id,data,{new:true,runValidators:true});
        return response;
    } catch (error) {
        throw error;
    }
   }  
   async Get(id){
    try {
    const response=await Product.findOne(id);
        return response;
    } catch (error) {
        throw error;
    }
   }
   async GetAll(data){
    try {
    const response=await Product.find(data);
        return response;
    } catch (error) {
        throw error;
    }
   }
}
module.exports=ProductRepo;