const Cart = require("../model/cartModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.addToCart = catchAsync(async (req, res, next) => {
  const { _id } = req.user;
  const cart = await Cart.create({ user: _id, ...req.body });

  res.status(200).json({
    status: "success",
    data: {
      cart,
    },
  });
});

exports.getCartItems = catchAsync(async (req, res, next) => {
  const cart = await Cart.find({ user: req.user._id }).populate({
    path: "product",
    select: "-__v -size -color -description -highlights -createdAt -updatedAt",
  });
  res.status(200).json({
    status: "success",
    data: {
      cart,
    },
  });
});

exports.updateCartItems = catchAsync(async (req, res, next) => {
  const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      cart,
    },
  });
});

exports.removeCartItem = catchAsync(async (req, res, next) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    message: "removed",
  });
});

exports.removeMultipleCartItems = catchAsync(async (req, res, next) => {
  const { ids } = req.body;
  await Cart.updateMany({ _id: { $in: ids } }, { $set: { isActive: false } });

  res.status(200).json({
    status: "success",
  });
});
