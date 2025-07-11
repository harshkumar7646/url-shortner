const mongoose=require("mongoose");
async function connectDB(){
    try{
        mongoose.connect(process.env.MONGO_URL);
        console.log("DATABASE CONNECTED");
    }catch(error){
        console.log("error:",error);
    }
}

module.exports={connectDB};
