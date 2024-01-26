const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  { email: { type: String, unique: true, required: true },
    pass: { type: String,required: true },
    token:String
},
  { collection: "user" }
);

const user = mongoose.model("user", UserSchema);
module.exports = user;
