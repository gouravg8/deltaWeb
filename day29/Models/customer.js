import mongoose, { Schema } from "mongoose";

main()
  .then(console.log("connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});
const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addOrder = async () => {
  await Order.insertMany([
    { item: "Chocolate", price: 10 },
    { item: "Chips", price: 10 },
    { item: "Burger", price: 50 },
    { item: "Samosa", price: 15 },
  ]);
};
const addCustomer = async () => {
  let customer = new Customer({
    name: "Gouav",
  });

  let order1 = await Order.findOne({ item: "Samosa" });
  let order2 = await Order.findOne({ item: "Chocolate" });

  //   customer.orders.push(order1, order2);

  //   customer.save();

  let result = await Customer.find({});
  console.log(result);
};

const findCustomer = async () => {
  let find = await Customer.findOne({ name: "Gouav" }).populate("orders");
  console.log(find);
};

// addOrder();
// addCustomer();
findCustomer();
