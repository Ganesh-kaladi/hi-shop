const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    minLength: [4, "Name should have more than 4 characters"],
    maxLength: [30, "Name cannot exceed 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please enter you password"],
    minLength: [8, "Password should have more than 8 characters"],
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please enter you conform password"],
    minLength: [8, "Password should have more than 8 characters"],
    select: false,
    validate: {
      validator: function (confirmPassword) {
        return confirmPassword === this.password;
      },
      message: "Password and Confirm Password are not eqaul",
    },
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  },
  address: [
    {
      adressId: {
        type: String,
      },
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      street: {
        type: String,
      },
      landmark: {
        type: String,
      },
      city: {
        type: String,
      },
      pincode: {
        type: Number,
      },
      phone: {
        type: Number,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.checkHashedPassword = async function (
  userInputPassword,
  dbPassword
) {
  const compare = await bcrypt.compare(userInputPassword, dbPassword);
  return compare;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
