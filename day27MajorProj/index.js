import express from "express";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import methodOverride from "method-override";
import Listing from "./models/Listing.js";
import ExpressError from "./ExpressError.js";

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

const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";
async function main() {
  await mongoose.connect(MONGO_URL);
}
main()
  .then((res) => console.log("Major mongo is connected"))
  .catch((err) => console.error(err));

//   home route
app.get("/", (req, res) => res.redirect("/listings"));

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "faltu ka error");
};

// app.use("/api", (err, req, res, next) => {
//   let { status, message } = err;
//   res.status(status).send(message);
// });

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.use((err, req, res, next)=>{
  res.send(err)
})

// index Route
app.get("/listings", async (req, res) => {
  try {
    const listings = await Listing.find();
    res.render("listings/index", { listings });
  } catch (err) {
    console.error(err);
  }
});

// create new listing Route
// get the form to fill
app.get("/listings/new", async (req, res) => {
  res.render("listings/new");
});

// post the data into db
app.post("/listings/", async (req, res) => {
  try {
    await Listing(req.body.listing).save();
    console.log("Added:", req.body.listing.title);
    res.redirect("/listings");
  } catch (error) {
    console.error(error);
  }
});

// Delete the listing from the server
app.delete("/listings/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Listing.findByIdAndDelete(id);
    console.log("Deleted:", deleted.title);
    res.redirect("/listings");
  } catch (error) {
    console.error(err);
  }
});

// Edit Listing
// get edit form
app.get("/listings/:id/edit", async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await Listing.findById(id);
    res.render("listings/edit", { listing });
  } catch (err) {
    console.error(err);
  }
});

// put updated data to db
app.put("/listings/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await Listing.findByIdAndUpdate(id, req.body.listing, {
      new: true,
      runValidators: true,
    });
    console.log("Updated:", listing.title);
    res.redirect(`/listings/${id}`);
  } catch (err) {
    console.error(err);
  }
});

// individual Listing
app.get("/listings/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await Listing.findById(id);
    res.render("listings/show", { listing });
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => console.log(`port is on: ${port}`));
