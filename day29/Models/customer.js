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

customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let deleteOrders = await Order.deleteMany({
      _id: { $in: customer.orders },
    });
    console.log(deleteOrders);
  }
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
    name: "Susheela",
  });

  let order1 = await Order.findOne({ item: "Chocolate" });
  let order2 = new Order({
    item: "Pakodi",
    price: 30,
  });
  // let order2 = await Order.findOne({ item: "Chocolate" });

  customer.orders.push(order1, order2);

  order2.save();
  customer.save();

  // let result = await Customer.find({});
  // console.log(result);
};

const findCustomer = async () => {
  let find = await Customer.findOne({ name: "Susheela" }).populate("orders");
  console.log(find);
};

const deleteCustomer = async () => {
  const customer = await Customer.findByIdAndDelete("65ccdc05c36d1b9d0a7004e2");
  console.log(customer);
};

// addOrder();
// addCustomer();
// findCustomer();
deleteCustomer();
