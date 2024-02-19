import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import { reviewSchema } from "../schema.js";
import ExpressError from "../utils/ExpressError.js";
import Review from "../models/Review.js";
import Listing from "../models/Listing.js";

const router = express.Router({ mergeParams: true });

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
router.post(
  "/",
  validateReviewSchema,
  wrapAsync(async (req, res, next) => {
    const { id } = await req.params;
    const listing = await Listing.findById(id);
    const newReview = await Review(req.body.review);

    console.log(id, listing);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    console.log("Review saved", req.body.review);
    req.flash("success", "New review added!");
    res.redirect(`/listings/${id}`);
  })
);

// DELETE the Review
router.delete(
  "/:reviewId",
  wrapAsync(async (req, res, next) => {
    const { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    const reviewDelete = await Review.findByIdAndDelete(reviewId);

    // Delete all reviews findby listingID
    // let out = await Listing.findByIdAndUpdate(
    //   "65c3a5192c33247cce57eb6a",
    //   { $set: { reviews: [] } },
    //   { new: true }
    // );
    console.log("Review Deleted:", reviewDelete.comment);
    req.flash("success", "Review deleted!");
    res.redirect(`/listings/${id}`);
  })
);

export default router;
