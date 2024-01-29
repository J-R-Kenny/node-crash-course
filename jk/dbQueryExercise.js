const { makeDBConnectionPool } = require("./dbHelp");

async function mainTask() {
  const pool = makeDBConnectionPool("omdb");
  const dbResult = await pool.query(
    "select * from movies where name LIKE '%Lord of the Ring%' limit 1"
  );
  console.log(dbResult.rows);
}

mainTask().then((data) => {
  console.log("This is after the promise actually");
}); //watch out, this returns a promise before the work is done!
