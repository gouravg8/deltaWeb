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

export { isLoggedin, saveRedirectUrl };
