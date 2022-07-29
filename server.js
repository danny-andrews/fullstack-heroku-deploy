import express from "express";
import pg from "pg";
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const PORT = process.env.PORT;

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
