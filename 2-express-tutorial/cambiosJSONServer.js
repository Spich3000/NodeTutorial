const express = require("express");
const path = require("path")
const fs = require("fs");
const dataFilePath = path.join(__dirname, "Cambios.json");

// const data = path(__dirname, "Cambios.json")

const app = express();

app.get("/", (req, res) => {
    fs.readFile(dataFilePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading JSON file:", err);
            res.status(500).json({ error: "Error reading JSON file" });
            return;
        }

        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (parseError) {
            console.error("Error parsing JSON:", parseError);
            res.status(500).json({ error: "Error parsing JSON" });
        }
    });
})

app.listen(5050, () => {
    console.log("server listening port 5050");
})