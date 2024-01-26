const mongoose = require("mongoose");

const CustomerEntrySchema = new mongoose.Schema(
  {
    date: String,
    customer: String,
    supplier: String,
    process: String,
    transport: String,
    billdate: String,
    lotno: Number,
    billno: Number,
    quality: String,
    pcs: Number,
    meter: Number,
    rate: Number,
    billamt:Number,
    belamt:Number,
    voucher:[]
},
  { collection: "Company" }
);

const Company = mongoose.model("Company", CustomerEntrySchema);
module.exports = Company;
