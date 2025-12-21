const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  let filePath;
  res.setHeader("Content-Type", "text/html");

  // Routing with switch case
  switch (req.url) {
    case "/":
      filePath = path.join(__dirname, "views", "home.html");
      res.statusCode = 200;
      break;

    case "/about":
      filePath = path.join(__dirname, "views", "about.html");
      res.statusCode = 200;
      break;

    case "/redirect-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      return;

    default:
      filePath = path.join(__dirname, "views", "404.html");
      res.statusCode = 404;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Server Error");
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Server running on http://localhost:3000");
});
