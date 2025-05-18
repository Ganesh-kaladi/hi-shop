const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: Number,
      default: 1,
    },
    color: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

cartSchema.pre(/^find/, function (next) {
  this.find({ isActive: { $ne: false } });
  next();
});

cartSchema.virtual("totalPrice").get(function () {
  if (!this.product) return;
  const totalPrice = this.quantity * this.product.price * 1;
  return totalPrice;
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
