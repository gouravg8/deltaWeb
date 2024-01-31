import express from "express";
import path from "path";
const app = express();
const port = 8080;
import methodOverride from "method-override";
// uuid import
import { v4 as uuidv4 } from "uuid";
// * for path
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// handling post req data, and sending post data into json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// override method
app.use(methodOverride("_method"));
// set path of views(ejs)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
// set public folder path
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => console.log(`listning on ${port}`));

// demo posts stored in array
let posts = [
  { id: "1a", username: "gourav", content: "I am a fullstack developer" },
  {
    id: "1b",
    username: "sourav",
    content: "main to iphone launga",
  },
  {
    id: "1c",
    username: "anu",
    content: "main barbad hona chahta hun",
  },
];

app.get("/posts", (req, res) => {
  res.render("index", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  //   console.log(username, content);
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);
  res.render("post", { post });
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);
  res.render("edit", { post });
});

app.patch("/posts/:id", (req, res) => {
  // res.send("working patch");
  let { id } = req.params;
  // let contentt = req.body.content;
  let post = posts.find((p) => p.id === id);
  post.content = req.body.content;
  res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  // let pidx = posts.findIndex((p) => p.id === id);
  // posts.splice(pidx, 1);
  // console.log(id,pidx)
  posts = posts.filter((p) => p.id !== id);
  res.redirect("/posts");
});

app.get("*", (req, res) => {
  res.send("Wrong URL");
});
