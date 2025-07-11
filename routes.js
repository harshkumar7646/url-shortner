const express=require("express");
const router=express.Router();
const {getOriginalUrl,insertdata,getHistory}=require("./controllers")
router.get("/history",getHistory)
router.get("/",(req,res)=>{
    res.render("home");
})  
//dhek ke daalna be url /api/users mat likhna kyu li index.js me jo router ko import krrha waha pe already likh diya h
router.get("/:cust_url",getOriginalUrl)
router.post("/create",insertdata)

module.exports=router;