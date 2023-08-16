const {readFileSync, writeFileSync} = require("fs");
/* Second way to call it:
const fs = require("fs");
fs.readFileSync
fs.writeFileSync
*/

const first = readFileSync("./content/first.txt", "utf-8")
const second = readFileSync("./content/second.txt", "utf-8")

// console.log(first, second);

writeFileSync("./content/result-sync.txt", `Here is the result: ${first}, ${second}`, {flag: "a"})



