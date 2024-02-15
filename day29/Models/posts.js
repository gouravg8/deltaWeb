import mongoose, { Schema } from "mongoose";

main()
  .then(console.log("connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  email: String,
});
const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "Userr",
  },
});

const Userr = mongoose.model("Userr", userSchema);
const Post = mongoose.model("Post", postSchema);

const addUser = async () => {
  new Userr({
    username: "gouravsoni",
    email: "faltuhun@gmail.com",
  }).save();
};

const addPost = async () => {
  const user = await Userr.findOne({ username: "gouravsoni" });
  const post = new Post({
    content: "Hello biro",
    likes: 8,
    user: user,
  }).save();
};

const showPostWithUser = async () => {
  const result = await Post.find({}).populate("user");
  console.log(result);
};

// addUser();
// addPost();
showPostWithUser();
