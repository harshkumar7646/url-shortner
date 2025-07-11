require("dotenv").config();
const url=require("./model.js");

const getOriginalUrl=async (req,res)=>{
    try{
        const {cust_url}=req.params;
        console.log(cust_url);
        const rec=await url.findOne({cust_url:cust_url});
        console.log(rec);
        if (!rec){
            res.status(404).json({"message":"not found"});
        }
        res.redirect(rec.original_url);
    }
    catch(error){
        res.status(400).end();
    }
     
}
const insertdata=async (req,res)=>{
    try{
        const body=req.body;
        await url.create({
        cust_url:body.cust_url,
        original_url:body.original_url
    })
    
    res.render("home",{GENurl:body.cust_url,
        SHORTLINK: `${process.env.BASE_URL ||}/${body.cust_url}`
    })
    }
    catch(error){
        res.json({"status":"error in post"}).end();
        console.log(error);
    }
}
const getHistory=async (req,res)=>{
    try{
        const ress=await url.find({});
        console.log(ress);
        res.render("home",{response:ress});
    }
    catch(error){
        console.log(error);
        res.status(400).json({"message":"error occured in history"})
    }
}
module.exports={getOriginalUrl,insertdata,getHistory};
