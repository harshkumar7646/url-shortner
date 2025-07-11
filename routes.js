const express=require("express");
const router=express.Router();
const {getOriginalUrl,insertdata,getHistory}=require("./controllers")
router.get("/history",getHistory)
router.get("/",(req,res)=>{
    res.render("home");
})  
router.get("/:cust_url",getOriginalUrl)
router.post("/create",insertdata)

module.exports=router;
