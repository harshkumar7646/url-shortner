require("dotenv").config();
const url = require("./model.js");

const getOriginalUrl = async (req, res) => {
    try {
        const { cust_url } = req.params;
        console.log(cust_url);
        const rec = await url.findOne({ cust_url: cust_url });
        console.log(rec);
        if (!rec) {
            return res.status(404).json({ "message": "not found" });
        }
        return res.redirect(rec.original_url);
    }
    catch (error) {
        console.log("Error in getOriginalUrl:", error);
        return res.status(400).json({ "message": "Bad request" });
    }
}

const insertdata = async (req, res) => {
    try {
        const body = req.body;
        await url.create({
            cust_url: body.cust_url,
            original_url: body.original_url
        });
        
        const baseUrl = process.env.BASE_URL || "";
        res.render("home", {
            GENurl: body.cust_url,
            SHORTLINK: `${baseUrl}/${body.cust_url}`
        });
    }
    catch (error) {
        console.log("Error in insertdata:", error);
        res.status(400).json({ "status": "error in post" });
    }
}

const getHistory = async (req, res) => {
    try {
        const ress = await url.find({});
        console.log(ress);
        res.render("home", { response: ress });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ "message": "error occurred in history" });
    }
}

module.exports = { getOriginalUrl, insertdata, getHistory };
