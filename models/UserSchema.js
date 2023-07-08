const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "name input is required please fill this"],
      unique: [true, "name must be unique"],
      minLength: [3, "username to short"],
      maxLength: [32, "username to long"],
    },
    email: {
      type: String,
      required: [true, "email inputs is required please fill this"],
      unique: [true, "email must be unique"],
      minLength: [5, "email title to short"],
      maxLength: [32, "email title to long"],
    },
    password: {
      type: String,
      required: [true, "password inputs is required please fill this"],
      unique: [true, "password must be unique"],
      minLength: [8, "user password to short"],
      maxLength: [156, "user password to long"],
    },
  },
  { timestamps: true }
);

const UserModal = mongoose.model("user", UserSchema);

module.exports = UserModal;
