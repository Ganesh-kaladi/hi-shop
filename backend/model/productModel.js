const mongoose = require("mongoose");

const productModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a product name."],
      trim: true,
    },
    highlights: [
      {
        type: String,
        required: [true, "Product must have a highlights."],
        max: [80, "Description must be less than 80 characters."],
      },
    ],
    description: {
      type: String,
      required: [true, "Product must have a description."],
      max: [300, "Description must be less than 300 characters."],
    },
    stock: {
      type: Number,
      required: [true, "Please provide the stock quantity for the product."],
      min: [0, "Stock quantity cannot be less than zero."],
    },
    price: {
      type: Number,
      required: [true, "Please provide a price for the product."],
      min: [0, "Price cannot be less than zero."],
    },
    discountPrice: {
      type: Number,
      min: [0, "Price cannot be less than zero."],
    },
    category: {
      type: String,
      enum: [
        "topware",
        "bottomware",
        "jeans",
        "shorts",
        "t-shirts",
        "footware",
        "sports",
        "watch",
        "accessories",
      ],
      required: [true, "Please specify the product category."],
    },
    brand: {
      type: String,
      default: "Local Brand",
    },
    color: [
      {
        type: String,
      },
    ],
    size: [
      {
        type: String,
        enum: [
          "s",
          "m",
          "l",
          "xl",
          "xxl",
          28,
          30,
          32,
          34,
          36,
          38,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          "One Size",
        ],
      },
    ],
    image: [
      {
        type: String,
      },
    ],

    ratings: {
      type: Number,
      default: 4.5,
      min: [1, "Rating must be at least 1."],
      max: [5, "Rating cannot exceed 5."],
    },
    productCollection: {
      type: String,
      enum: ["men", "women", "kid"],
      required: [true, "Product is belongs to a collection"],
    },
    percentage: {
      type: Number,
      default: 0,
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
  }
);

productModel.pre("save", function (next) {
  if (!this.discountPrice) return;

  percentageCal = ((this.price - this.discountPrice) * 100) / this.price;
  this.percentage = percentageCal.toFixed(0);
  next();
});

productModel.virtual("reviews", {
  ref: "Review",
  foreignField: "product",
  localField: "_id",
});

const Product = mongoose.model("Product", productModel);

module.exports = Product;
