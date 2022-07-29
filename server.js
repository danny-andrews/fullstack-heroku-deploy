import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { DATABASE_URL, NODE_ENV, PORT } = process.env;

const pool = new pg.Pool({
  connectionString: DATABASE_URL,
  ssl: NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
});

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
