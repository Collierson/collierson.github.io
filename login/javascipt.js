const http = require("http");
const fs = require("fs");
const sendResponse = (filename, statusCode, response) => {
    fs.readFile(`./${filename}`, (error, data) => {
        if(error){
            response.statusCode = 500;
            response.setHeader("Content-Type", "text/plain");
            response.end("抱歉，不明錯誤");
        }else{
            response.statusCode = statusCode;
            response.setHeader("Content-Type", "text/html");
            response.end(data);
        }
    });
};

const server = http.createServer((request, response) => {
    response.end("Hi world");
    const method = request.method;
    const url = request.url;
    if(method === "GET"){
        if(url === "/"){
            sendResponse("home.html", 200, response);
        }else if(url === "/login.html"){
            sendResponse("login.html", 200, response);
        }else{
            sendResponse("404.html", 404, response);
        }
    }
    else{
        if(url === "#"){
            let body = [];
            request.on("data", (chunk) => {
                body.push(chunk);
            });
    
            request.on("end",() => {
                console.log(body);
            });
        }
    }    
});

const port = 3000;
const ip = "127.0.0.1";
server.listen(port, ip, () =>{
    console.log(`伺服器已啟動: http//${ip}:${port} `);
});







