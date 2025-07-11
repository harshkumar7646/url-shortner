const mongoose=require("mongoose");

const urlSchema= new mongoose.Schema({
    cust_url:{
        type:String,
        require:true
    },
    original_url:{
        type:String,
        required:true
        
    }
})

const url=mongoose.model("urlData",urlSchema);
module.exports=url;