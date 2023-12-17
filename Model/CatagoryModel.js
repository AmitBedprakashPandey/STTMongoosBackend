const mongoose = require("mongoose");

const CatagorySchema = new mongoose.Schema(
  { catagory: String},
  { collection: "Catagory" }
);

const Data = mongoose.model("Catagory", CatagorySchema);
module.exports = Data;
