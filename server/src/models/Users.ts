const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: String,
    avatar: String,
    date: {
      type: Date,
      default: Date.now,
      index: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    strict: "throw",
  }
);

const Users = mongoose.model("user", UserSchema);
module.exports = Users;
