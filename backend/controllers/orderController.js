const Order = require("../model/orderModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.createOrder = catchAsync(async (req, res, next) => {
  req.body.user = req.user._id;
  const order = await Order.create(req.body);
  res.status(200).json({
    status: "success",
    data: {
      order,
    },
  });
});

exports.getOrders = catchAsync(async (req, res, next) => {
  const order = await Order.find({ user: req.user._id });
  res.status(200).json({
    status: "success",
    data: {
      order,
    },
  });
});

exports.getSingleOrder = catchAsync(async (req, res, next) => {
  const order = await Order.findById(req.params.id)
    .populate({
      path: "user",
      select: "name",
    })
    .populate({
      path: "products.product",
      select: "title price image ratings",
    });
  res.status(200).json({
    status: "success",
    data: {
      order,
    },
  });
});
