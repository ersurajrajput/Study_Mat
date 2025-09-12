const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()}: \t ${req.url}: \n`
    fs.appendFile("log.txt",log,(err)=>{
        if(err) throw err
        switch (req.url) {
            case "/":
                res.end("hello from server");   
                break;
            case "/about":
                res.end("hey there! i am suraj");
                break;
            case "/login":
                res.end("coming soon");
                break;
            default:
                res.end("404 not found");
                break;
        }

    })
    
});

myServer.listen(8000,()=> console.log("server started"));