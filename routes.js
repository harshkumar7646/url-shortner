
const express = require("express");
const router = express.Router();
const { insertdata, getHistory } = require("./controllers.js");

router.get("/history", getHistory);
router.get("/", (req, res) => {
    res.render("home");
});
router.post("/create", insertdata);

module.exports = router;
