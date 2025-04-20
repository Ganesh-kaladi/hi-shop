const express = require("express");

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const {
  authorizationRole,
  authentication,
} = require("../controllers/authController");

const {
  getAllProduct,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("./../controllers/productController");

const router = express.Router();

router
  .route("/")
  .get(getAllProduct)
  .post(
    authentication,
    authorizationRole("admin"),
    upload.single("image"),
    createProduct
  );
router
  .route("/:id")
  .get(getProduct)
  .delete(authentication, authorizationRole("admin"), deleteProduct)
  .patch(authentication, authorizationRole("admin"), updateProduct);

module.exports = router;
