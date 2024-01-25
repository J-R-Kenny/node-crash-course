const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  console.log(request.url, request.method);

  //   set header content type
  response.setHeader("Content-Type", "text/html");

  response.write("<p>hello, world</p>");
  response.write("<p>This is the second line.</p>");
  response.write(generateNumber().toString());
  response.end();
});

server.listen(3000, "localhost", () => {
  console.log("Listening for requests on port 3000");
});

function generateNumber() {
  return Math.floor(Math.random() * 6) + 1;
}
