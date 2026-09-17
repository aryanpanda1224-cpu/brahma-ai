const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });

  res.end("BRAHMA backend is online!");
});

server.listen(3000, () => {
  console.log("BRAHMA backend running on port 3000");
});
