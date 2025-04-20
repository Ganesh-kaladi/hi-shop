const AppError = require("../utils/appError");
const User = require("./../model/userModel");
const catchAsync = require("./../utils/catchAsync");

exports.getAllUser = catchAsync(async (req, res, next) => {
  const user = await User.find();
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new AppError("user is not find, Please give valid information", 400)
    );
  }
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.createUser = catchAsync(async (req, res, next) => {
  const createUser = await User.create(req.body);
  res.status(200).json({
    status: "success",
    data: createUser,
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);
  if (!(await User.findByIdAndDelete(req.params.id))) {
    return next(
      new AppError("user is not find, Please give valid information", 400)
    );
  }
  res.status(204).json({
    status: "success",
    data: "DELETE user",
    id: req.params.id,
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!user) {
    return next(
      new AppError("user is not find, Please give valid information", 400)
    );
  }
  res.status(200).json({
    status: "success",
    data: user,
  });
});
