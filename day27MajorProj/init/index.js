import { sampleData } from "./data.js";
import mongoose from "mongoose";
import Listing from "../models/Listing.js";

const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";
async function main() {
  await mongoose.connect(MONGO_URL);
}

const addData = async () => {
  // console.log(sampleData);
  let dataWithOwner = sampleData.map((list) => ({
    ...list,
    owner: "65d7548162a61e00588501c7",
  }));
  await Listing.insertMany(dataWithOwner);
  console.log("Sample data added");
};

main()
  .then(console.log("DB se connected successfully"))
  .catch((err) => console.log(err));
addData();
