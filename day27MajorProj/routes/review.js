import express from "express";
import wrapAsync from "../utils/wrapAsync.js";

import { validateReviewSchema, isLoggedin, isAuthor } from "../middleware.js";
import { createReview, destroyReview } from "../controllers/review.js";

const router = express.Router({ mergeParams: true });

// POST the Review
router.post("/", isLoggedin, validateReviewSchema, wrapAsync(createReview));

// DELETE the Review
router.delete("/:reviewId", isLoggedin, isAuthor, wrapAsync(destroyReview));

export default router;
