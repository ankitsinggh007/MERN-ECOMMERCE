const Connect = require('./config/databseConfig');

require('dotenv').config({path:"api/config/Config.env"});
const mainRoute=require('./routes');

const app=require('./app');


app.use('/api',mainRoute);



















const connect=async()=>{
    try {
        console.log(process.env.Mongo_URI)
        await Connect(process.env.Mongo_URI);
        app.listen(process.env.PORT,()=>{
            console.log(`development server started on ${process.env.PORT}`);
        });
    } catch (error) {
        throw error;
    }
}

connect();