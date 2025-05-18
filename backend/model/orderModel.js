const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: String },
        color: { type: String },
        size: { type: String },
        isDelivery: { type: String, default: "pending" },
        deliveryDate: { type: Date },
        paymentMode: { type: String },
      },
    ],
    bagTotal: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    gst: {
      type: Number,
      required: true,
    },
    shippingCharge: {
      type: Number,
      required: true,
    },
    totalAmt: {
      type: Number,
      required: true,
    },
    paymentId: {
      type: String,
    },
    paymentMode: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "paid", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    deliveryAddress: {
      type: Object,
    },

    deliveryDate: {
      type: Date,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

orderSchema.pre("save", function (next) {
  this.orderId = `#OrderHi${new Date().getFullYear()}${
    new Date().getMonth() + 1
  }${new Date().getDate()}${new Date().getHours()}${new Date().getMinutes()}${new Date().getSeconds()}`;
  next();
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
