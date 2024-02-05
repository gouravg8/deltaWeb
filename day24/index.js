import mongoose from "mongoose";

const test = async () => {
  //   try {
  const h = await mongoose.connect("mongodb://127.0.0.1:27017/test");
  // console.log("HO GYA CONNECT");
  //   } catch (error) {
  //     console.log(error);
  //   }
};
test()
  .then(() => console.log("HO GYA CONNECT"))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);
// const u1 = new User({ name: "Gourav", email: "gourav@gmail.com", age: 21 });

// User.insertMany([
//   { name: "John", age: 25, city: "New York", marks: 85 },
//   { name: "Alice", age: 22, city: "Los Angeles", marks: 78 },
//   { name: "John", age: 25, city: "Chicago", marks: 90 },
//   { name: "Emily", age: 23, marks: 70 },
//   { name: "Michael", age: 24, city: "Houston", marks: 82 },
//   { name: "Sarah", age: 26, city: "Miami", marks: 88 },
//   { name: "John", age: 25, marks: 75 },
//   { name: "David", age: 22, city: "San Francisco", marks: 79 },
//   { name: "Emma", age: 21, marks: 68 },
// ]);

// u1.save()

// User.findOne().then((res) => console.log(res));
// User.find().then((res) => console.log(res));

// User.findOneAndUpdate({ name: "Gourav" }, { age: 20 }, { new: true }).then(
//   (res) => console.log(res)
// );

// User.findById("65c0c3d81a3ba70fb79e4644").then((res) => console.log(res));

// User.findByIdAndUpdate(
//   "65c0c3d81a3ba70fb79e4644",
//   { age: 25 },
//   { new: true }
// ).then((res) => console.log(res));
User.findByIdAndDelete("65c0cae1fb5845dbb8b549fc").then((res) =>
  console.log(res)
);
