import { sampleData } from "./data.js";
import mongoose from "mongoose";
import Listing from "../models/Listing.js";

const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";
async function main() {
  await mongoose.connect(MONGO_URL);
}

const addData = async () => {
  await Listing.insertMany(sampleData);
  console.log("Sample data added");
};

main()
  .then(console.log("DB se connected successfully"))
  .catch((err) => console.log(err));
addData();
