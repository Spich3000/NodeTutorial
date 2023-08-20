const express = require("express");
const app = express();

let {people} = require("./data") 

app.get("/api/people", (req, res) => {
    res.status(200).json({success: true, data: people})
})

app.listen(5050, () => {
    console.log("server listening port 5050");
})