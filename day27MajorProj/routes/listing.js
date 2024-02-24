import express from "express";
import Listing from "../models/Listing.js";
import wrapAsync from "../utils/wrapAsync.js";
import { isLoggedin, isOwner, validateSchema } from "../middleware.js";
import {
  index,
  listingNewForm,
  listingPost,
  listingDelete,
  listingEditForm,
  listingUpdate,
  listingOneShow,
} from "../controllers/listing.js";

const router = express.Router();
// index Route
router.get("/", index);

// create new listing Route
// get the form to fill
router.get("/new", isLoggedin, listingNewForm);

// post the data into db
router.post("/", isLoggedin, validateSchema, wrapAsync(listingPost));

// Delete the listing from the server
router.delete("/:id", isLoggedin, isOwner, listingDelete);

// Edit Listing
// get edit form
router.get("/:id/edit", isLoggedin, listingEditForm);

// put updated data to db
router.put(
  "/:id",
  isLoggedin,
  isOwner,
  validateSchema,
  wrapAsync(listingUpdate)
);

// individual Listing
router.get("/:id", listingOneShow);

export default router;
