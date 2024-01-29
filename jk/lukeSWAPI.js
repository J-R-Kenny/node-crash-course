const express = require("express");
//express app
const app = express();
const axios = require("axios").default;

//listen for requests
app.listen(3000);

//luke page - queries the SWAPI for data on luke then returns that data and send a file with that data to display.
app.get("/luke", async (req, res) => {
  const lukeData = await getLukeData();
  res.json(lukeData);
});

///redirects
app.get("/test", (req, res) => {
  res.redirect("/");
});

//404 pages - express sends this file if code reaches this point.
app.use((req, res) => {
  res.status(404).sendFile("./404.html", { root: __dirname });
});

/////API query to SWAPI
const url = "https://swapi.dev/api/people/1";

async function getLukeData() {
  const url = "https://swapi.dev/api/people/1";
  const result = await axios.get(url);
  console.log(result.data);
  return result.data;
}
