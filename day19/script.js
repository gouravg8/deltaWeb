import express from "express";
import path from "path";
const app = express();
const port = 8080;

// * for path
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// handling post req data, and sending post data into json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
  res.render("newPost");
});

app.post("/posts", async (req, res) => {
  let { username, content } = req.body;
  //   console.log(username, content);
  posts.push({ username, content });
  res.redirect("/posts");
});


