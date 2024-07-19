const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "0.0.0.0";
const port = 3000;

const server = http.createServer((req, res) => {
  // Agrega los encabezados CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  if (req.url === "/" && req.method === "GET") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error loading page");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  } else if (req.url === "/api" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Hello from the first API!" }));
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
