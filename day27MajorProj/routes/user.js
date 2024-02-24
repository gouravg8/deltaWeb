import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import passport from "passport";
import {
  isLoggedin,
  saveRedirectUrl,
  validateUserRegister,
} from "../middleware.js";
import {
  renderSignupForm,
  signup,
  renderLoginForm,
  login,
  logout,
} from "../controllers/user.js";

const router = express.Router({ mergeParams: true });

router
  .route("/signup")
  .get(renderSignupForm)
  .post(saveRedirectUrl, validateUserRegister, signup);

router
  .route("/login")
  .get(renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    wrapAsync(login)
  );

router.get("/logout", isLoggedin, logout);

// app.get("/demoUser", async (req, res) => {
//   let fakeUser = new User({
//     email: "suar@gmail.com",
//     username: "suarbiro",
//   });
//   let regUser = await User.register(fakeUser, "suarpass");
//   res.send(regUser);
// });

export default router;
