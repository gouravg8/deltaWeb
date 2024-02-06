import mongoose from "mongoose";
import Chat from "./models/chat.js";

let dbname = "whatsapp";
async function main() {
  await mongoose.connect(`mongodb://127.0.0.1:27017/${dbname}`);
}
main()
  .then((res) => console.log("mongo se connect ho gya"))
  .catch((err) => console.error(err));

Chat.insertMany([
  { from: "Alice", to: "Bob", msg: "Hello!", created_at: new Date() },
  { from: "Charlie", to: "David", msg: "How are you?", created_at: new Date() },
  { from: "Eve", to: "Frank", msg: "Meeting at 3 PM.", created_at: new Date() },
  { from: "Grace", to: "Henry", msg: "See you soon!", created_at: new Date() },
  { from: "Ivy", to: "Jack", msg: "Don't forget!", created_at: new Date() },
]);
console.log(Chat);
