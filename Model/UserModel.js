const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  { email: String,
    pass: String,
},
  { collection: "user" }
);

const user = mongoose.model("user", UserSchema);
module.exports = user;
