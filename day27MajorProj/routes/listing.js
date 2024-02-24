import express from "express";
import Listing from "../models/Listing.js";
import wrapAsync from "../utils/wrapAsync.js";
import { isLoggedin, isOwner, validateSchema } from "../middleware.js";
import {
  index,
  renderNewListingForm,
  createListing,
  destroyListing,
  renderEditFormListing,
  updateListing,
  showListing,
} from "../controllers/listing.js";

const router = express.Router();
// index Route
router.get("/", index);

// create new listing Route
// get the form to fill
router.get("/new", isLoggedin, renderNewListingForm);

// post the data into db
router.post("/", isLoggedin, validateSchema, wrapAsync(createListing));

// Delete the listing from the server
router.delete("/:id", isLoggedin, isOwner, destroyListing);

// Edit Listing
// get edit form
router.get("/:id/edit", isLoggedin, renderEditFormListing);

// put updated data to db
router.put(
  "/:id",
  isLoggedin,
  isOwner,
  validateSchema,
  wrapAsync(updateListing)
);

// individual Listing
router.get("/:id", showListing);

export default router;
