// const http = require("http");

// const server = http.createServer((request, result) => {
//     if(request.url === '/') {
//         result.end('Welcome to our home page')
//         // result.end();
//     }

//     if(request.url === '/about') {
//         result.end('Here is about short history')
//         // result.end();
//     }

//     result.end(`
//     <h1>Oops!<h1>
//     <p>We can't seem to find the page you are looking for<p>
//     <a href="/">back home</a>
//     `); // DONT FORGET TO PUT DOTCOMA AT THE END!!!! IF NOT THE SERVER ENDS AFTER SINGLE REQUEST!!!

//     // result.end();

//     //console.log(request);
//     // result.write("Welcome to our home page")
//     // result.end()
// })

// server.listen(5050);



const http = require("http");

const server = http.createServer((request, result) => {
    if (request.url === '/') {
        result.end('Welcome to our home page');
    } else if (request.url === '/about') {
        result.end('Here is about short history');
    } else {
        result.end(`
            <h1>Oops!<h1>
            <p>We can't seem to find the page you are looking for<p>
            <a href="/">back home</a>
        `);
    }
});

server.listen(5050);
