import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import { userReg } from "../schema.js";
import ExpressError from "../utils/ExpressError.js";
import User from "../models/User.js";
import flash from "connect-flash";

const router = express.Router({ mergeParams: true });

// validate review schema
const validateUserRegister = (req, res, next) => {
  let { error } = userReg.validate(req.body);
  // console.log(req.body);
  if (error) {
    console.log("userReg error hai", error);
    throw new ExpressError(400, error.message);
  } else next();
};

router.get("/signup", (req, res) => {
  res.render("user/signup");
});

// POST the Review
router.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body.userReg;
    let newUser = new User({ email, username });
    let regUser = await User.register(newUser, password);
    req.flash("success", "User Registerd successfully!!");

    console.log(newUser);
    res.redirect("/listings");
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/signup");
  }
});

// app.get("/demoUser", async (req, res) => {
//   let fakeUser = new User({
//     email: "suar@gmail.com",
//     username: "suarbiro",
//   });
//   let regUser = await User.register(fakeUser, "suarpass");
//   res.send(regUser);
// });

export default router;
