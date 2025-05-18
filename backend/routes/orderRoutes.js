const express = require("express");

const { authentication } = require("../controllers/authController");
const {
  createOrder,
  getOrders,
  getSingleOrder,
} = require("../controllers/orderController");

const router = express.Router();

router
  .route("/")
  .post(authentication, createOrder)
  .get(authentication, getOrders);

router.route("/:id").get(authentication, getSingleOrder);

module.exports = router;
