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
    handleReadFile(200, "./index.php");
  } 
  else if (req.url === "/about.html") {
    handleReadFile(200, "./about.html");
  } 
  else if (req.url === "/media.html") {
    handleReadFile(200, "./media.html");
  } 
    else if (req.url === "/extras.html") {
    handleReadFile(200, "./extras.html");
  } 
    else if (req.url === "/marchandics.html") {
    handleReadFile(200, "./marchandics.html");
  } 
    else if (req.url === "/packags.html") {
    handleReadFile(200, "./packags.html");
  } 

  else if (req.url === "/contact.html") {
    handleReadFile(200, "./contact.html");
  } 
    else if (req.url === "/singout.html") {
    handleReadFile(200, "./singout.html");
  
  }
      else if (req.url === "/login.php") {
    handleReadFile(200, "./login.php");
  
  }
      else if (req.url === "/register.php") {
    handleReadFile(200, "./register.php");
  
  }
        else if (req.url === "/server.php") {
    handleReadFile(200, "./server.php");
  
  }
     else if (req.url === "/product.php") {
    handleReadFile(200, "./product.php");
  
  }
     else if (req.url === "/app.js") {
    handleReadFile(200, "./app.js");
  
  }
  else {
    handleReadFile(200, "./admin.html");
  }
});
  
   
  
   

server.listen(PORT, hostName, () => {
  console.log(`Server is running at http://${hostName}:${PORT}`);
});
