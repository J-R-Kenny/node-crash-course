const express = require("express");
const app = express();
const axios = require("axios").default;
app.listen(3000);

app.get("/", async (req, res) => {
  res.json(await dbQuery);
});

const url = "https://swapi.dev/api/people/1";

async function getWebsiteData() {
  const url = "http://localhost:3000";
  const result = await axios.get(url);
  return result.data;
}
getWebsiteData().then((websiteData) => {
  console.log(`This is the website data in the next line`);
  console.log(websiteData);
});

const { makeDBConnectionPool } = require("./dbHelp");

async function mainTask() {
  const pool = makeDBConnectionPool("omdb");
  const dbResult = await pool.query(
    "select * from movies where name LIKE '%Lord of the Ring%' limit 1"
  );
  //   console.log(`This is inside the mainTask function ${dbResult.rows}`);
  return dbResult.rows;
}

let dbQuery = mainTask().then((data) => {
  return data;
});
