import express from "express";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import methodOverride from "method-override";
import ExpressError from "./utils/ExpressError.js";
import listings from "./routes/listing.js";
import reviews from "./routes/review.js";
import userReg from "./routes/user.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import flash from "connect-flash";
import passport from "passport";
import LocalStrategy from "passport-local";
import User from "./models/User.js";

const app = express();
const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// handling post req data, and sending post data into json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";

async function main() {
  await mongoose.connect(MONGO_URL);
}
main()
  .then((res) => console.log("Major mongo is connected"))
  .catch((err) => console.error(err));

const sessionOptions = {
  secret: "mySecretKey",
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // for one hour
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//   home route
app.get("/", (req, res) => res.redirect("/listings"));

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// Routes
app.use("/listings", listings);
app.use("/listings/:id/review", reviews);
app.use("/", userReg);

const handleValidation = (err) => {
  console.log("You have to fill the required fields");
  return err;
};

// for invalid path
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page nahi mila"));
});

app.use((err, req, res, next) => {
  // console.log(err.name);
  if (err.name === "ValidationError") err = handleValidation(err);
  next(err);
});

app.use((err, req, res, next) => {
  let { status = 500, message = "internal error" } = err;
  req.flash("error", message);
  // res.status(status).render('layouts/error', {message});
  res.status(status).send(message);
});

app.listen(port, () => console.log(`port is on: ${port}`));
