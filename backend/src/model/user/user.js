import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    FirstName: {
      type: String,
      unique: true,
      required: [true, "Please supply the first name"],
    },
    LastName: {
      type: String,
      unique: true,
      required: [true, "Please supply the last name"],
    },
    gender: {
      type: String,
      enum: ["Female", "Male"],
      required: [true, "Please supply your gender"],
    },
    email: {
      type: String,

      required: [true, "Please, supply the email"],
    },
    avatar: {
      type: String,
    },
    role: { type: String, enum: ["regular", "admin"], default: "regular" },
    password: { type: String, required: true },
  
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
