const express = require("express");
const app = express();
const cors = require("cors");
const globalError = require("./controllers/errorController");
const AppError = require("./utils/appError");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const morgan = require("morgan");
const helmet = require("helmet");
const qs = require("qs");

app.use(
  cors({
    origin: process.env.CORS_URL,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Use qs to parse nested query params
app.set("query parser", (str) => qs.parse(str));

// set security HTTP headers
app.use(helmet());

//logging
if (process.env.NODE_ENV === "production") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/review", reviewRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/order", orderRoutes);

// handle all not existed routes
app.use("/*all", (req, res, next) => {
  next(new AppError(`doesn't exist the ${req.baseUrl}`, 400));
});

// handle global err
app.use(globalError);

module.exports = app;
