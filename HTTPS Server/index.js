const http = require("http");
const fs = require("fs")
const url = require("url");
const myServer = http.createServer((req, res) => {
    const log = `${Date.now()} ${req.url}: New Request Received \n`;
    const myURL = url.parse(req.url,true)
    console.log(myURL)
    fs.appendFile("log.txt", log, (err, data) => {

        switch (myURL.pathname) {
            case "/":
                res.end("HomePage")
                break;
            case "/about":
                const username = myURL.query.myname;
                res.end(`Hi ${username}`);
            default:
                res.end("404 Not Found");

        }
    });
});

myServer.listen(8000, () => console.log("Server Started"))