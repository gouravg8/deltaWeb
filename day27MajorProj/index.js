import express from "express";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import methodOverride from "method-override";
import Listing from "./models/Listing.js";
import Review from "./models/Review.js";
import ExpressError from "./utils/ExpressError.js";
import wrapAsync from "./utils/wrapAsync.js";
import listingSchema, { reviewSchema } from "./schema.js";

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

const validateSchema = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  // console.log(req.body);
  if (error) {
    console.log("listingValidateErrorHai", error);
    throw new ExpressError(400, error.message);
  } else next();
};

// post the data into db
app.post(
  "/listings",
  validateSchema,
  wrapAsync(async (req, res, next) => {
    await Listing(req.body.listing).save();
    // console.log("Added:", req.body.listing.title);
    res.redirect("/listings");
  })
);

// validate review schema
const validateReviewSchema = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  // console.log(req.body);
  if (error) {
    console.log("reviewValidateErrorHai", error);
    throw new ExpressError(400, error.message);
  } else next();
};

// POST the Review
app.post(
  "/listings/:id/review",
  validateReviewSchema,
  wrapAsync(async (req, res, next) => {
    const { id } = await req.params;
    const listing = await Listing.findById(id);
    const newReview = await Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    console.log("Review saved", req.body.review);
    res.redirect(`/listings/${id}`);
  })
);

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
app.put(
  "/listings/:id",
  validateSchema,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findByIdAndUpdate(
      id,
      { ...req.body.listing },
      {
        new: true,
        runValidators: true,
      }
    );
    console.log("Updated:", listing.title);
    res.redirect(`/listings/${id}`);
  })
);

// individual Listing
app.get("/listings/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show", { listing });
  } catch (err) {
    console.error(err);
  }
});

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
