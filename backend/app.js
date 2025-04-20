const express = require("express");
const app = express();
const cors = require("cors");
const globalError = require("./controllers/errorController");
const AppError = require("./utils/appError");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

// console.log(process.env.NODE_ENV);

app.use(cors());

app.use(express.json());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/review", reviewRoutes);

// handle all not existed routes
app.use("*", (req, res, next) => {
  next(new AppError(`doesn't exist the ${req.baseUrl}`, 400));
});

// handle global err
app.use(globalError);

module.exports = app;
