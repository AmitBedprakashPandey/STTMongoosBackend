const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
  {
    customer: String,
    category: String,
    mobile: Number,
    office: Number,
    email: String,
    city: String,
    state: String,
  },
  { collection: "Customer" }
);

const Data = mongoose.model("Customer", CustomerSchema);
module.exports = Data;
