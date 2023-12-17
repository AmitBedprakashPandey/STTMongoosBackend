const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema(
  { title: String,
    address: String,
    city:String,
    state:String,
    pincode:Number,
    phone:Number,
    email:String
},
  { collection: "Company" }
);

const Company = mongoose.model("Company", CompanySchema);
module.exports = Company;
