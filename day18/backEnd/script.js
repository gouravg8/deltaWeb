import express from "express";
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.listen(port, (req, res) => {
  console.log(`listning at ${port}`);
});

app.get("/register", (req, res) => {
  let { username } = req.query;
  res.send(`normal GET response, Welcome ${username}`);
});

app.post("/register", (req, res) => {
  let { username } = req.body;
  console.log(req.body);
  res.send(`normal POST response, Welcome ${username}`);
});
