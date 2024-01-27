import express from "express";
const app = express();
const port = 8080;


app.listen(port, (req, res) => console.log("ban gya server"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
  //   res.send("root pe ho");
});

app.get("*", (req, res) => res.send("galat rasta pakad liya aapne"));
