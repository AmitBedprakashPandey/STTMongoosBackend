const mongoose = require("mongoose");

const StateSchema = new mongoose.Schema(
  { state: String,
},
  { collection: "State" }
);

const State = mongoose.model("State", StateSchema);
module.exports = State;
