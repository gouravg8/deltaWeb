import express from "express";
import Listing from "../models/Listing.js";
import wrapAsync from "../utils/wrapAsync.js";
import { isLoggedin, isOwner, validateSchema } from "../middleware.js";

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
router.get("/new", isLoggedin, async (req, res) => {
  res.render("listings/new");
});

// post the data into db
router.post(
  "/",
  isLoggedin,
  validateSchema,
  wrapAsync(async (req, res, next) => {
    let newUser = new Listing(req.body.listing);
    newUser.owner = req.user._id;
    await newUser.save();
    console.log("Added:", req.body.listing.title);
    req.flash("success", "New listing added!");
    res.redirect("/");
  })
);

// Delete the listing from the server
router.delete("/:id", isLoggedin, async (req, res) => {
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
router.get("/:id/edit", isLoggedin, async (req, res) => {
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
  isLoggedin,
  isOwner,
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

    req.flash("success", "Listing updated!");
    console.log("Updated:", listing.title);
    res.redirect(`/listings/${id}`);
  })
);

// individual Listing
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await Listing.findById(id)
      .populate("reviews")
      .populate("owner");
    console.log(listing);
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
