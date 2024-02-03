import { faker } from "@faker-js/faker";
import mysql from "mysql2/promise";
import express, { urlencoded } from "express";
import ejs from "ejs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";

const app = express();
const port = 8080;
app.set("view engine", "ejs");
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", path.join(__dirname, "/views"));
app.use(express.static("public"));
app.listen(port, (req, res) => console.log(`port ${port}`));
// Create the connection to database

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "mysqlServer@8",
});

// accept json data from url
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// console.log(data10);
app.get("/", async (req, res) => {
  let lenQ = "SELECT COUNT(id) AS 'results' FROM USER";
  try {
    const [results] = await connection.query(lenQ);
    res.render("home", { results });
  } catch (err) {
    res.send(err);
  }
  // res.send("from get home");
});
