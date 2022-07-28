import express from "express";
import pg from "pg";

const pool = new pg.Pool({
  database: "steam",
});

const PORT = 3000;

const app = express();

app.use(express.static("static"));

app.get("/games", (req, res) => {
  pool.query("SELECT * FROM game").then((result) => {
    res.send(result.rows);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
