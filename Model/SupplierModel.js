const mongoose = require("mongoose");

const SuppllierSchema = new mongoose.Schema(
  {
    suppllier: String,
    category: String,
    mobile: Number,
    office: Number,
    email: String,
    city: String,
    state: String,
  },
  { collection: "Suppllier" }
);

const Data = mongoose.model("Suppllier", SuppllierSchema);
module.exports = Data;
