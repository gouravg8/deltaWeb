import express from "express";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import methodOverride from "method-override";
import Chat from "./models/chat.js";

const app = express();
const port = 8080;

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

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
main()
  .then((res) => console.log("mongo se connect ho gya"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.redirect("/chats");
});

// index Route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  // console.log(chats);
  res.render("chats", { chats });
});

// new Chat Route
app.get("/chats/new", (req, res) => {
  res.render("new");
});

// send new Chat Route
app.post("/chats", async (req, res) => {
  let { from, to, msg } = req.body;
  try {
    await new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date(),
    }).save();
  } catch (error) {
    console.error(error);
  }
  res.redirect("/chats");
});

// edit message Route
/// get edit form
app.get("/chats/:id/edit", async (req, res) => {
  const { id } = req.params;
  try {
    let chat = await Chat.findById(id);
    console.log(id);
    res.render("edit", { chat });
  } catch (err) {
    console.error(err);
  }
});

/// put new values in DB
app.put("/chats/:id", async (req, res) => {
  const { id } = req.params;
  const { msg } = req.body;
  try {
    await Chat.findByIdAndUpdate(
      id,
      { msg: msg },
      { runValidators: true, new: true }
    );
    res.redirect("/chats");
  } catch (err) {
    console.error(err);
  }
});



app.listen(port, () => console.log(`port is on: ${port}`));
