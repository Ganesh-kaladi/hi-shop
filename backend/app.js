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

app.use(
  cors({
    origin: "https://hi-shop-lake.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// app.use(cors());
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
