const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  console.log(request.url, request.method);

  //   set header content type
  response.setHeader("Content-Type", "text/html");

  //send html file
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      console.log(err);
      response.end();
    } else {
      response.write(data);
      response.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening for requests on port 3000");
});
