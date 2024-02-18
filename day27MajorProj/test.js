import express from "express";
// import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();
const port = 8080;

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

app.get("/reg", (req, res) => {
  const { name = "Anonymous" } = req.query;
  req.session.name = name;
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.send(`hello ${req.session.name}`);
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
