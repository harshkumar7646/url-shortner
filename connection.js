const mongoose=require("mongoose");
async function connectDB(){
    try{
        mongoose.connect("mongodb+srv://sirihey0047:jB2cXi8qreRQTQSI@cluster0.gg1m5yi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("DATABASE CONNECTED");
    }catch(error){
        console.log("error:",error);
    }
}

module.exports={connectDB};
//jB2cXi8qreRQTQSI
//sirihey0047