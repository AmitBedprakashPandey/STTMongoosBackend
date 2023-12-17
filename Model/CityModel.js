const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema(
  { city: String,
},
  { collection: "City" }
);

const City = mongoose.model("City", CitySchema);
module.exports = City;
