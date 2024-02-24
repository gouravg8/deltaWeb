import express from "express";
import wrapAsync from "../utils/wrapAsync.js";

import {
  isLoggedin,
  saveRedirectUrl,
  passportAuthenticate,
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

router.get("/signup", renderSignupForm);

// POST the Review
router.post("/signup", saveRedirectUrl, validateUserRegister, signup);

router.get("/login", renderLoginForm);

router.post("/login", saveRedirectUrl, passportAuthenticate, wrapAsync(login));

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
