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
import multer from "multer";
import { cloudinary, storage } from "../cloudConfig.js";
const upload = multer({ storage });

const router = express.Router();

router
  .route("/")
  .get(wrapAsync(index))
  // .post(isLoggedin, validateSchema, wrapAsync(createListing));
  .post(isLoggedin, upload.single("listing[image]"), wrapAsync(createListing));

// create new listing form
router.get("/new", isLoggedin, renderNewListingForm);

router
  .route("/:id")
  .get(showListing)
  .put(
    isLoggedin,
    isOwner,
    upload.single("listing[image]"),
    validateSchema,
    wrapAsync(updateListing)
  )
  .delete(isLoggedin, isOwner, destroyListing);

// Edit Listing form
router.get("/:id/edit", isLoggedin, renderEditFormListing);

export default router;
