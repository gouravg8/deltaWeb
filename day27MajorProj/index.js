import express from "express";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import methodOverride from "method-override";
import ExpressError from "./utils/ExpressError.js";
import listings from "./routes/listing.js";
import reviews from "./routes/review.js";
import cookieParser from "cookie-parser";

const app = express();
const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// cookie parser
app.use(cookieParser("secretcode"));

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

const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";

async function main() {
  await mongoose.connect(MONGO_URL);
}
main()
  .then((res) => console.log("Major mongo is connected"))
  .catch((err) => console.error(err));
//   home route
app.get("/", (req, res) => res.redirect("/listings"));

app.get("/cookie", (req, res) => {
  res.cookie("name", "gourav", { signed: true });
  res.send("send");
});
app.get("/verify", (req, res) => {
  res.send(req.signedCookies);
});
// Routes
app.use("/listings", listings);
app.use("/listings/:id/review", reviews);

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
  res.status(status).send(message);
});

app.listen(port, () => console.log(`port is on: ${port}`));
