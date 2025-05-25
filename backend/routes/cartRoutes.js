const express = require("express");

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const { authentication } = require("../controllers/authController");

const {
  addToCart,
  getCartItems,
  updateCartItems,
  removeCartItem,
  removeMultipleCartItems,
} = require("./../controllers/cartController");

const router = express.Router();

router.patch("/delete-cart-items", authentication, removeMultipleCartItems);

router
  .route("/")
  .post(authentication, addToCart)
  .get(authentication, getCartItems);

router
  .route('/:"id"')
  .patch(authentication, updateCartItems)
  .delete(authentication, removeCartItem);
module.exports = router;
