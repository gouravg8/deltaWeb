import express from "express";
const app = express();
const port = 8080;

app.listen(port, () => console.log(`listening on port: ${port}`));

let outHtml = `<div>
    <h2>Response from express</h2>
    <ul>
      <li>mango</li>
      <li>banana</li>
      <li>orange</li>
      <li>apple</li>
    </ul>
  </div>`;

// app.use((req, res) => {
//   console.log("request aayi hai from: ", req.url);
//   //   res.send("<h1>Ham response hu</h1>");
// //   res.send(outHtml);
//   //   res.send({ naam: "gouav soni", subClass: "bca" });
//   //   res.send([1, 2, 3, 4]);
// });

app.get("/", (req, res) => {
  res.send(`sale suar from ${req.url}`);
});

app.get("/apple", (req, res) => {
  res.send({
    naam: "apple",
    color: "red",
  });
});

app.get("/ig/:username/:id", (req, res) => {
  let { username, id } = req.params;
  console.log(req.params);
  res.send(`this is username: @${username} and id: ${id}`);
});

app.get("/search", (req, res) => {
  // let { q, color } = req.query;
  let { q } = req.query;
  // if(!q || !color) req.send('nothing searched')
  if (!q) res.send("nothing searched");
  console.log(req.query);
  // res.send(`query: ${q}, color: ${color}`);
  res.send(`query: ${q}`);
});

app.get("*", (req, res) => res.send("Galat jagah aaye ho biro"));
