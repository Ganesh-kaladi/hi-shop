const express = require("express");

const router = express.Router();

const reviewController = require("../controllers/reviewController");
const authController = require("../controllers/authController");

router
  .route("/:productID")
  .post(authController.authentication, reviewController.createReview);

module.exports = router;
