import Listing from "./models/Listing.js";
import Review from "./models/Review.js";
import ExpressError from "./utils/ExpressError.js";
import listingSchema, { reviewSchema } from "./schema.js";
import passport from "passport";
import { userReg } from "./schema.js";

const isLoggedin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    // redirect after login or sign up to desired path
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You are not logged in!");
    return res.redirect("/login");
  }
  next();
};
// validate user registration schema
const validateUserRegister = (req, res, next) => {
  let { error } = userReg.validate(req.body);
  // console.log(req.body);
  if (error) {
    console.log("userReg error hai", error);
    throw new ExpressError(400, error.message);
  } else next();
};

const saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

// is current user owner of the listing
const isOwner = async (req, res, next) => {
  const { id } = req.params;
  let listing = await Listing.findById(id);
  if (!res.locals.currUser._id.equals(listing.owner._id)) {
    req.flash("error", "You are not the owner of this content");
    res.redirect(`/listings/${id}`);
  } else next();
};

// is current user author of review
const isAuthor = async (req, res, next) => {
  const { id, reviewId } = req.params;
  // console.log(reviewId);
  const review = await Review.findById(reviewId);
  if (!res.locals.currUser._id.equals(review.author._id)) {
    req.flash("error", "Yor are not review owner");
    res.redirect(`/listings/${id}`);
  } else next();
};

// validate listing Schema
const validateSchema = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  // console.log(req.body);
  if (error) {
    console.log("listingValidateErrorHai", error);
    throw new ExpressError(400, error.message);
  } else next();
};

// validate review schema
const validateReviewSchema = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  // console.log(req.body);
  if (error) {
    console.log("reviewValidateErrorHai", error);
    throw new ExpressError(400, error.message);
  } else next();
};

const passportAuthenticate = (req, res, next) => {
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  });
  next();
};

export {
  isLoggedin,
  saveRedirectUrl,
  isOwner,
  validateSchema,
  validateReviewSchema,
  isAuthor,
  passportAuthenticate,
  validateUserRegister,
};
