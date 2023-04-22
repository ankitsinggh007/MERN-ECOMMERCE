const ProductRepo = require("../repository/productRepo");

class productService{

    constructor(){
        this.productrepo=new ProductRepo();
    }

    async listItem(data){
        try {
        const response=await this.productrepo.Create(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
    async deleteItem(id){
        try {
            const response=await this.productrepo.Delete(id);
                return response;
            } catch (error) {
                throw error;
            }

    }
    async UpdateItem(id, product){
        try {
            const response=await this.productrepo.Update(id,product);
                return response;
            } catch (error) {
                throw error;
            }
    }
    async GetItem(id){
        try {
            const response=await this.productrepo.Get(id);
                return response;
            } catch (error) {
                throw error;
            }
    }
    async GetItems(data){
        try {
            const response=await this.productrepo.GetAll(data);
                return response;
            } catch (error) {
                throw error;
            }
    }

}

module.exports=productService;