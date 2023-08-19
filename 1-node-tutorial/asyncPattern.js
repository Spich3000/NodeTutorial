const http = require("http")

// const server = http.createServer((req, res) => {
//     if(req.url === "/") {
//         res.end("Home page")
//     }

//     if(req.url === "/about") {
//         res.end("About Page")
//     }

//     res.end("Error Page")
// })

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Home page");
    } else if (req.url === "/about") {
        res.end("About Page");
    } else {
        res.end("Error Page");
    }
});

server.listen(5050, () => {
    console.log("Server is Listening on port 5050")
})
