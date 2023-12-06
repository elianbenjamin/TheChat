
import mongoose from "mongoose";

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

const User = mongoose.model("User", UserSchema);
export default User;
