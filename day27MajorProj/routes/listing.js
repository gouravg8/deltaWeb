import express from "express";
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

router
  .route("/")
  .get(index)
  .post(isLoggedin, validateSchema, wrapAsync(createListing));

// create new listing form
router.get("/new", isLoggedin, renderNewListingForm);

router
  .route("/:id")
  .get(showListing)
  .put(isLoggedin, isOwner, validateSchema, wrapAsync(updateListing))
  .delete(isLoggedin, isOwner, destroyListing);

// Edit Listing form
router.get("/:id/edit", isLoggedin, renderEditFormListing);

export default router;
