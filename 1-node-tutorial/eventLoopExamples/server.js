const http = require("http")

const server = http.createServer((request, result) => {
    console.log("request event");
    result.end("Hello world")
})

server.listen(5050, () => {
    console.log("Server listening on port 5050...");
})