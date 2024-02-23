import Listing from "./models/Listing.js";
import ExpressError from "./utils/ExpressError.js";
import listingSchema, { reviewSchema } from "./schema.js";
const isLoggedin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    // redirect after login or sign up to desired path
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You are not logged in!");
    return res.redirect("/login");
  }
  next();
};

const saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

const isOwner = async (req, res, next) => {
  const { id } = req.params;
  let listing = await Listing.findById(id);
  if (!res.locals.currUser._id.equals(listing.owner._id)) {
    req.flash("error", "You are not the owner of this content");
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

export {
  isLoggedin,
  saveRedirectUrl,
  isOwner,
  validateSchema,
  validateReviewSchema,
};
