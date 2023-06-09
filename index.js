const http = require("http");
const fs = require("fs");
const PORT = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  const handleReadFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };

  
 
  if (req.url === "/") {
    handleReadFile(200, "./index.html");
  } 
  else if (req.url === "/about") {
    handleReadFile(200, "./about.html");
  } 
  else if (req.url === "/media") {
    handleReadFile(200, "./media.html");
  } 
    else if (req.url === "/extras") {
    handleReadFile(200, "./extras.html");
  } 
    else if (req.url === "/marchandics") {
    handleReadFile(200, "./marchandics.html");
  } 
    else if (req.url === "/Packages") {
    handleReadFile(200, "./Packages.html");
  } 

  else if (req.url === "/book") {
    handleReadFile(200, "./book.html");
  } 
    else if (req.url === "/singout") {
    handleReadFile(200, "./singout.html");
  
  }
  else {
    handleReadFile(200, "./admin.html");
  }
});
  
   
  
   

server.listen(PORT, hostName, () => {
  console.log(`Server is running at http://${hostName}:${PORT}`);
});