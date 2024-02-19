import express from "express";
import Listing from "../models/Listing.js";
import wrapAsync from "../utils/wrapAsync.js";
import listingSchema from "../schema.js";
import ExpressError from "../utils/ExpressError.js";

const router = express.Router();
// index Route
router.get("/", async (req, res) => {
  try {
    const listings = await Listing.find();
    res.render("listings/index", { listings });
  } catch (err) {
    console.error(err);
  }
});

// create new listing Route
// get the form to fill
router.get("/new", async (req, res) => {
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
router.post(
  "/",
  validateSchema,
  wrapAsync(async (req, res, next) => {
    await Listing(req.body.listing).save();
    console.log("Added:", req.body.listing.title);
    req.flash("success", "New listing added!");
    res.redirect("/");
  })
);

// Delete the listing from the server
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Listing.findByIdAndDelete(id);
    console.log("Deleted:", deleted.title);
    req.flash("success", "Listing deleted!");
    res.redirect("/");
  } catch (error) {
    console.error(err);
  }
});

// Edit Listing
// get edit form
router.get("/:id/edit", async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing is not available for editing");
      res.redirect("/");
    }
    res.render("listings/edit", { listing });
  } catch (err) {
    console.error(err);
  }
});

// put updated data to db
router.put(
  "/:id",
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
    req.flash("success", "Listing updated!");
    res.redirect(`/listings/${id}`);
  })
);

// individual Listing
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
      req.flash("error", "Your searched lising is not found");
      res.redirect("/");
    }
    res.render("listings/show", { listing });
  } catch (err) {
    console.error(err);
  }
});

export default router;
