const express = require("express");
//express app
const app = express();
const axios = require("axios").default;

//listen for requests
app.listen(3000);

app.get("/", async (req, res) => {
  res.json(arrayOfStrings);
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

async function getWebsiteData() {
  const url = "http://localhost:3000";
  const result = await axios.get(url);
  return result.data;
}
getWebsiteData().then((websiteData) => {
  console.log(websiteData);
});
const arrayOfStrings = ["apple", "banana", "orange", "grape"];
