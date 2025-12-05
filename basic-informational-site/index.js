const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080;

function pages(res, fileName, statusCode = 200) {
    const filePath = path.join(__dirname, fileName);

    fs.readFile(filePath, (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("An error has occured");
        }

        res.writeHead(statusCode, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

const server = http.createServer((req, res) => {
    const path = req.url;

    if (path === "/") pages(res, "index.html");
    else if (path === "/about") pages(res, "about.html");
    else if (path === "/contact-me") pages(res, "contact-me.html");
    else pages(res, "404.html", 404);
});

server.listen(PORT, () => console.log(`Server is running at port ${PORT}`));