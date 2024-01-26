const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema(
  { 
    title: {type :String,require :true,unique: true},
    address: String,
    city:String,
    state:String,
    pincode:Number,
    phone:Number,
    office:Number,
    email:String
},
  { collection: "Company" }
);

const Company = mongoose.model("CompanyDetail", CompanySchema);
module.exports = Company;
