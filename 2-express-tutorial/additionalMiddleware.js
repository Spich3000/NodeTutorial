const express = require("express");
const app = express();
const logger = require("./logger")
const authorize = require("./authorize")

const morgan = require("morgan")

// req => middleware => res

// api/home/about/products
// app.use(logger)

// 1. use vs route
// 2. options - our own / express / third party

// app.use([logger, authorize])
// app.use(express.static("./public"))

app.use(morgan("tiny"))

app.get("/", (req, res) => {
    // const method = req.method;
    // const url = req.url;
    // const time = new Date().getFullYear()
    // console.log(method, url, time);

    res.send("Home")
})

app.get("/about", (req, res) => {
    res.send("About")
})

app.get("/api/products", (req, res) => {
    res.send("Products")
})

app.listen(5050, () => {
    console.log("server listening port 5050");
})