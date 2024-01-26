const express = require("express");

//express app
const app = express();

//listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  res.send("./index.html", { root: __dirname });
});

app.get("/tyhafan", (req, res) => {
  res.sendFile("./tyhafan.html", { root: __dirname });
});

///redirects
app.get("/test", (req, res) => {
  res.redirect("/");
});

//404 pages - express sends this file if code reaches this point.
app.use((req, res) => {
  res.status(404).sendFile("./404.html", { root: __dirname });
});
