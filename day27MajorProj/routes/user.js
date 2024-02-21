import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import { userReg } from "../schema.js";
import ExpressError from "../utils/ExpressError.js";
import User from "../models/User.js";
import flash from "connect-flash";
import passport from "passport";
import { isLoggedin, saveRedirectUrl } from "../middleware.js";

const router = express.Router({ mergeParams: true });

// validate user registration schema
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
router.post("/signup", saveRedirectUrl, async (req, res) => {
  try {
    const { email, username, password } = req.body.userReg;
    let newUser = new User({ email, username });
    let regUser = await User.register(newUser, password);

    console.log(newUser);
    req.login(regUser, (err) => {
      if (err) return next(err);
      req.flash("success", "User Registerd successfully!!");
      let redirectUrl = res.locals.redirectUrl || "/listings";
      res.redirect(redirectUrl);
    });
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/signup");
  }
});

router.get("/login", (req, res) => {
  res.render("user/login");
});

router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  async (req, res) => {
    req.flash("success", "Logged in!!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
  }
);

router.get("/logout", isLoggedin, async (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash("success", "Logged out!!");
    res.redirect("/listings");
  });
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
