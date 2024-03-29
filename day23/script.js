import { faker } from "@faker-js/faker";
import mysql from "mysql2/promise";
import express, { urlencoded } from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";

const app = express();
const port = 8080;
app.set("view engine", "ejs");
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
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

app.get("/user", async (req, res) => {
  let detQ = "SELECT id, username, email FROM `user`";
  try {
    const [results] = await connection.query(detQ);
    res.render("userDetail", { results });
  } catch (err) {
    res.send(err);
  }
});

app.get("/user/:id/edit", async (req, res) => {
  let { id } = req.params;
  // console.log(id);
  let editQ = `SELECT id, username FROM user WHERE id = '${id}'`;
  try {
    const [results] = await connection.query(editQ);
    res.render("edit", { results });
  } catch (err) {
    res.send(err);
  }
});

app.patch("/user/:id/edit", async (req, res) => {
  const { id } = req.params;
  const { username } = req.body;
  let patchEditQ = `UPDATE user SET username = '${username}' WHERE id = '${id}'`;
  // console.log(username);
  // res.send('ho gya')

  // let editQ = `SELECT id, username FROM user WHERE id = '${id}'`;
  try {
    const [results] = await connection.query(patchEditQ);
    // console.log(results);
    res.redirect("/user");
  } catch (err) {
    res.send(err);
  }
});

app.get("/new", (req, res) => {
  res.render("new");
});
app.post("/new", async (req, res) => {
  const { email, username, password } = req.body;
  const id = faker.string.uuid();
  let newUserQ = `INSERT INTO user (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}')`;
  try {
    const [results] = await connection.query(newUserQ);
    // console.log(results);
    res.redirect("/user");
  } catch (error) {
    res.send(error);
  }
});

app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  const deleteQ = `DELETE FROM user WHERE id = '${id}'`;
  try {
    const [results] = await connection.query(deleteQ);
    // console.log(results);
    res.redirect("/user");
  } catch (error) {
    res.send(error);
  }
});
// connection.end();
