import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
  },
  created_at: {
    type: Date,
  },
});

const Chat = new mongoose.model("Chat", chatSchema);
export default Chat;
