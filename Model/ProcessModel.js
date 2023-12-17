const mongoose = require("mongoose");

const ProcessSchema = new mongoose.Schema(
  {
    process: String,
    category: String,
    mobile: Number,
    office: Number,
    email: String,
    city: String,
    state: String,
  },
  { collection: "Process" }
);

const Data = mongoose.model("Process", ProcessSchema);
module.exports = Data;
