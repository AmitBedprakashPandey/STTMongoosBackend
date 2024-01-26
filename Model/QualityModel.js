const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema(
  { quality: String,
},
  { collection: "Quality" }
);

const Quality = mongoose.model("Quality", CitySchema);
module.exports = Quality;
