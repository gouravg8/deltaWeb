import Listing from "../models/Listing.js";

const index = async (req, res) => {
  try {
    const listings = await Listing.find();
    res.render("listings/index", { listings });
  } catch (err) {
    console.error(err);
  }
};

const renderNewListingForm = async (req, res) => {
  res.render("listings/new");
};

const createListing = async (req, res, next) => {
  const url = req.file.path;
  const filename = req.file.filename;

  let newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  console.log("Added:", req.body.listing.title);
  req.flash("success", "New listing added!");
  res.redirect("/");
};

const destroyListing = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Listing.findByIdAndDelete(id);
    console.log("Deleted:", deleted.title);
    req.flash("success", "Listing deleted!");
    res.redirect("/");
  } catch (error) {
    console.error(err);
  }
};

const renderEditFormListing = async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing is not available for editing");
      res.redirect("/");
    }
    res.render("listings/edit", { listing });
  } catch (err) {
    console.error(err);
  }
};

const updateListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findByIdAndUpdate(
    id,
    { ...req.body.listing },
    {
      new: true,
      runValidators: true,
    }
  );

  req.flash("success", "Listing updated!");
  console.log("Updated:", listing.title);
  res.redirect(`/listings/${id}`);
};

const showListing = async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await Listing.findById(id)
      .populate({ path: "reviews", populate: { path: "author" } })
      .populate("owner");
    // console.log(listing);
    if (!listing) {
      req.flash("error", "Your searched lising is not found");
      res.redirect("/");
    }
    res.render("listings/show", { listing });
  } catch (err) {
    console.error(err);
  }
};

export {
  index,
  renderNewListingForm,
  createListing,
  destroyListing,
  renderEditFormListing,
  updateListing,
  showListing,
};
