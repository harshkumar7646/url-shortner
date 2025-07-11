const { connectDB } = require("./connection.js");
const url = require("./model.js");
const express = require("express");
const path = require("path");
const app = express();
const router = require("./routes.js");
const { getOriginalUrl } = require("./controllers.js");
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set("views", path.resolve("./views"));

// Root route
app.get("/", (req, res) => {
    res.render("home");
});

// API routes
app.use("/api/users", router);

// Short URL redirect route (at root level)
app.get("/:cust_url", getOriginalUrl);

app.listen(port, () => {
    console.log(`server listening at ${port}`);
});

connectDB();
