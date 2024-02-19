import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import flash from "connect-flash";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const app = express();
const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//! cookie parser
// app.use(cookieParser("secretcode"));
// console.log("hiis");
// ! cookie
// app.get("/cookie", (req, res) => {
//   res.cookie("name", "gourav", { signed: true });
//   res.send("send");
// });
// app.get("/verify", (req, res) => {
//   res.send(req.signedCookies);
// });
// !

const sessionOption = {
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true },
};

app.use(session(sessionOption));
app.use(flash());

app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  next();
});

app.get("/reg", (req, res) => {
  const { name = "Anonymous" } = req.query;
  req.session.name = name;
  if (name === "Anonymous") {
    req.flash("error", "User is not signed in");
  } else {
    req.flash("success", "successfully entered the value");
  }
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.render("flash", { name: req.session.name });
});
// app.get("/rq", (req, res) => {
//   // req.session.count ? req.session.count++ : (req.session.count = 1);
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`you've sended req ${req.session.count} times`);
// });

// app.get("/test", (req, res) => {
//   console.log(req.path);
//   res.send("session bana liya hai");
// });

app.listen(port, () => console.log(`port is on ${port}`));
