import express from "express";
import path from "path";
const app = express();
const port = 8080;

// importing data.json
import igData from "./data.json" assert { type: "json" };

// * code to use __dirname property
import { fileURLToPath } from "url";
import { dirname } from "path";
import { assert, log } from "console";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.listen(port, (req, res) => console.log("ban gya server"));
app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));
app.set("views", path.join(__dirname, "/views"));
app.get("/", (req, res) => {
  // res.render("home.ejs");
  res.send(`root pe ho: ${__filename}, ${__dirname}`);
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  res.send(`q is: ${q}`);
});

app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice", { diceVal });
});

app.get("/ig/:username", async (req, res) => {
  let { username } = req.params;
  // let igUser = await igData.json()
  // console.log(igUser.default);
  if(igData[username]) {
    res.render("ig", { igData: igData[username] });
  }else{
    res.send('galat id search kar rahe ho, only cats and dogs')
  }
});
app.get("*", (req, res) => res.send("galat rasta pakad liya aapne"));
