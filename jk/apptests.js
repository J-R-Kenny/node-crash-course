const express = require("express");
//express app
const app = express();
const axios = require("axios").default;

//listen for requests
app.listen(3000);

//dice roll page - generates and returns a number between 1 - 6
app.get("/roll1", (req, res) => {
  res.send(`${roll1()}`);
});

//luke page - queries the SWAPI for data on luke then returns that data and send a file with that data to display.
app.get("/luke", async (req, res) => {
  const lukeData = await getLukeData();
  res.json(lukeData);
});

app.get("/strings", (req, res) => {
  res.json(arrayOfStrings);
});

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/roll2", (req, res) => {
  res.send(`${roll2()}`);
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

const roll1 = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const roll2 = () => {
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  return dice1 + dice2;
};

const arrayOfStrings = ["apple", "banana", "cherry", "date", "elderberry"];

/////API query to SWAPI
const url = "https://swapi.dev/api/people/1";

async function getLukeData() {
  const url = "https://swapi.dev/api/people/1";
  const result = await axios.get(url);
  console.log(result.data);
  return result.data;
}
