const mongoose = require("mongoose");

const TransportSchema = new mongoose.Schema(
  { transport: String, shortname: String },
  { collection: "Transport" }
);

const Data = mongoose.model("Transport", TransportSchema);
module.exports = Data;
