const mongoose = require("mongoose");

const ProcessSchema = new mongoose.Schema(
  {
    process: String,
    category: String,
    address:String,
    mobile: Number,
    office1: Number,
    office2: Number,
    email: String,
    city: String,
    pincode:Number,
    state: String,
  },
  { collection: "Process" }
);

const Data = mongoose.model("Process", ProcessSchema);
module.exports = Data;
