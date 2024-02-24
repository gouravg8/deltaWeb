import Review from "../models/Review.js";
import Listing from "../models/Listing.js";

const createReview = async (req, res, next) => {
  const { id } = await req.params;
  const listing = await Listing.findById(id);
  let newReview = await Review(req.body.review);
  newReview.author = req.user;
  // console.log(id, listing);
  console.log(req.user);
  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();
  console.log("Review saved", req.body.review);
  req.flash("success", "New review added!");
  res.redirect(`/listings/${id}`);
};

const destroyReview = async (req, res, next) => {
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
};

export { createReview, destroyReview };
