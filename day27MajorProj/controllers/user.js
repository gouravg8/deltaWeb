import User from "../models/User.js";
import wrapAsync from "../utils/wrapAsync.js";
import flash from "connect-flash";
import { userReg } from "../schema.js";
import ExpressError from "../utils/ExpressError.js";
const renderSignupForm = (req, res) => {
  res.render("user/signup");
};

const signup = async (req, res) => {
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
};

const renderLoginForm = (req, res) => {
  res.render("user/login");
};
const login = async (req, res) => {
  req.flash("success", "Logged in!!");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

const logout = async (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash("success", "Logged out!!");
    res.redirect("/listings");
  });
};

export { renderSignupForm, signup, renderLoginForm, login, logout };
