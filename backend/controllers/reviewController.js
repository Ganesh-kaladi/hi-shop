const Review = require("../model/reviewModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.createReview = catchAsync(async (req, res, next) => {
  if (!req.user) {
    return next(new AppError("user must be logged into account", 400));
  }
  req.body.product = req.params.id;
  req.body.user = req.user._id;
  const review = await Review.create(req.body);
  res.status(200).json({
    status: "success",
    data: {
      doc: review,
    },
  });
});
