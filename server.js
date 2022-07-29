import express from "express";
import pg from "pg";
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));

app.get("/games", (req, res) => {
  pool.query("SELECT * FROM game").then((result) => {
    res.send(result.rows);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
