const mongoose = require("mongoose");

const SuppllierSchema = new mongoose.Schema(
  {
    supplier: String,
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
  { collection: "Suppllier" }
);

const Data = mongoose.model("Suppllier", SuppllierSchema);
module.exports = Data;
