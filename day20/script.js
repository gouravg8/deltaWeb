import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// accept json data from url
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
    caption: "badshah he badshah",
    image: "anu.jpg",
  },
];

app.get("/", (req, res) => {
  res.render("home", { posts });
});
