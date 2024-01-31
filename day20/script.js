import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";
import methodOverride from "method-override";
const app = express();
const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// accept json data from url
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// method override
app.use(methodOverride("_method"));

// view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
// static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, (req, res) => console.log(`server ${port}`));

let posts = [
  {
    id: "1a",
    username: "gourav",
    caption: "baton se apne mukarta nahi",
    image: "gourav.jpg",
  },
  {
    id: "1b",
    username: "sourav",
    caption: "marne se main kabhi darta nahi",
    image: "sourav.jpg",
  },
  {
    id: "1c",
    username: "anu",
    caption: "badshah he badshah ",
    image: "anu.jpg",
  },
];

app.get("/", (req, res) => {
  res.render("home", { posts });
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.post("/new", (req, res) => {
  let id = uuidv4();
  const { username, caption, image } = req.body;
  posts.push({ id, username, caption, image });
  // console.log(id, username, caption, image);
  // console.log(posts);
  // console.log(req);
  res.redirect("/");
});

app.get("/:id/edit", (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === id);
  res.render("edit", { post });
});

app.patch("/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === id);
  post.caption = req.body.caption;
  res.redirect("/");
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  posts = posts.filter((p) => p.id !== id);
  console.log(posts);
  res.redirect("/");
});
