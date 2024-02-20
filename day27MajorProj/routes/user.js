import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import { userReg } from "../schema.js";
import ExpressError from "../utils/ExpressError.js";
import User from "../models/User.js";

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
router.post(
  "/signup",
  wrapAsync(async (req, res) => {
    const { email, username, password } = req.body.userReg;
    let regUser = await User.register({ email, username }, password);

    res.send(`regUser: ${regUser}`);
  })
);

// app.get("/demoUser", async (req, res) => {
//   let fakeUser = new User({
//     email: "suar@gmail.com",
//     username: "suarbiro",
//   });
//   let regUser = await User.register(fakeUser, "suarpass");
//   res.send(regUser);
// });

export default router;
