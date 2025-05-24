const AppError = require("../utils/appError");

const handleCastError = (err) => {
  const message = `The given information is ${err.path}:${err.value} not correct, Please provide valid information`;
  return new AppError(message, 400);
};

const handleDupilcateFieldError = (err) => {
  const value = err.errorResponse.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};

const handleValidationError = (err) => {
  const value = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data.  ${value.join(". ")}`;
  return new AppError(message, 400);
};

const sendProductionErr = (err, res) => {
  console.log(`----------${err}`);
  //operational error
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      error: err.message,
    });
  }
  //programming error
  else {
    console.log("ERROR 💥", err);
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

const sendDevelopmentErr = (err, res) => {
  res.status(err.statusCode || 400).json({
    status: err.status,
    err: err.message,
    error: err,
  });
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "fail";

  if (process.env.NODE_ENV === "production") {
    if (err.name === "CastError") err = handleCastError(err, res);
    if (err.code === 11000) err = handleDupilcateFieldError(err, res);
    if (err.name === "ValidationError") err = handleValidationError(err, res);

    sendProductionErr(err, res);
  } else if (process.env.NODE_ENV === "develoment") {
    sendDevelopmentErr(err, res);
  }
};
