require("dotenv").config(); 
const {connectDB}=require("./connection.js");
const url=require("./model.js")
const express=require("express");
const path=require("path");
const app=express();
const router=require("./routes.js");
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server.listen at ${port}`)
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set("views",path.resolve("./views"));
app.use("/",router);
app.get("/", (req, res) => {
    res.render("home");
});
connectDB();
