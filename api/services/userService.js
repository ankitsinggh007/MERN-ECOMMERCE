const User = require("../models/User");
const userRepo = require("../repository/userRepo");

class userService{

    constructor(){
        this.userrepo=new userRepo();
    }


    async Create(data){
        try {
        const response=await this.userrepo.createUser(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
    async login(data){
        try{
            const {password,email}=data;
        console.log(password,email);
        
        if(!email||!password) throw new Error("please provde email or password");
        const response=await this.userrepo.GetUser({email});
        
        if(!response) throw new Error("please provide correct email");
        const isPasswordMatch=await response.comparePassword(password);
        if(isPasswordMatch) throw new Error("email or password in not correct");
        
            const token=response.genJWTTOKEN;
        
        } catch (error) {
            throw error;
        }
    }
    
    
    

}

module.exports=userService;