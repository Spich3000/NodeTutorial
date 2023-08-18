const express = require("express");
const app = express()

// app.get
// app. post
// app.put
// app.delete
// app.use
// app.listen

app.listen(5050, () => {
    console.log("Server is listening on port 5000");
})

app.get("/", (req, res) => {
    res.status(200).send("Home Page")
})

app.get("/about", (req, res) => {
    res.status(200).send("About Page")
})

app.all("*", (req, res) => {
    res.status(404).send("<h1>resource not found</h1>")
})