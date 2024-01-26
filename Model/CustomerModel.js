const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
  {
    customer: String,
    category: String,
    address:String,
    state: String,
    city: String,
    pincode:Number,  
    office1: Number,
    office2: Number,
    mobile: Number,
    email: String,
  },
  { collection: "Customer" }
);

const Data = mongoose.model("Customer", CustomerSchema);
module.exports = Data;
