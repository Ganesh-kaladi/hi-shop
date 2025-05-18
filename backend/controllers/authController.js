const User = require("../model/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");

exports.authentication = catchAsync(async (req, res, next) => {
  // console.log(`req.headers.authorization:${req.headers.authorization}`);
  if (!req.headers.authorization)
    return next(new AppError("user must be login for this action"));

  const token = req.headers.authorization.split(" ");
  // console.log(`token: ${token}`);
  if (!token[0] === "Bearer")
    return next(new AppError("unauthorized request.", 401));

  const decode = jwt.verify(token[1], process.env.JWT_PASSWORD);
  const user = await User.findById(decode.id).select("-address");
  if (!user) return next(new AppError("Please Login again"));

  req.user = user;

  next();
});

exports.authorizationRole = (role) => {
  return (req, res, next) => {
    if (!(req.user.role === role))
      return next(
        new AppError("you don't have permission for this action", 404)
      );

    next();
  };
};

const sendJwtToken = catchAsync(async (id, statusCode, res) => {
  const token = await jwt.sign({ id }, process.env.JWT_PASSWORD, {
    expiresIn: 24 * 60 * 60,
  });
  res.status(statusCode).json({
    status: "success",
    token,
  });
});

exports.signUp = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);
  sendJwtToken(user._id, 200, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Please provide email and password", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.checkHashedPassword(password, user.password))) {
    return next(new AppError("email and password are incorrect.", 400));
  }
  sendJwtToken(user._id, 200, res);
});

exports.getMe = catchAsync(async (req, res, next) => {
  if (!req.user)
    return next(new AppError("user must be logged into account", 404));

  res.status(200).json({
    status: "success",
    data: {
      doc: req.user,
    },
  });
});

exports.addAddress = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    return next(
      new AppError("user is not find, Please give valid information", 400)
    );
  }
  user.address.push(req.body.address);
  await user.save();
  res.status(200).json({
    status: "success",
    data: user,
  });
});

exports.getAddress = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id).select("address");
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
