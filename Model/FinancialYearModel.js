const mongoose = require("mongoose");

const FinancialYearSchema = new mongoose.Schema(
  { fyear: String},
  { collection: "FinancialYear" }
);

const Data = mongoose.model("FinancialYear", FinancialYearSchema);
module.exports = Data;
