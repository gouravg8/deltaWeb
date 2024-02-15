import mongoose, { Schema } from "mongoose";

main()
  .then(console.log("connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  addresses: [{ location: String, city: String }],
});

const User = mongoose.model("User", userSchema);

const addUser = async () =>{
    const user = new User({
        username: "Ramesh",
        addresses: [{location: 'New Delhi', city: 'india'}]
    });
    user.addresses.push({ location: 'New york', city: 'USA' });
    await user.save();
}


// addUser();