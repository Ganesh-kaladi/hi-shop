const express = require("express");

const router = express.Router();

const {
  authentication,
  authorizationRole,
  signUp,
  login,
  getMe,
  addAddress,
  getAddress,
} = require("../controllers/authController");
const {
  getAllUser,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} = require("./../controllers/userController");

router.post("/sign-up", signUp);
router.post("/login", login);
router.get("/get-me/", authentication, getMe);
router.post("/add-address", authentication, addAddress);
router.get("/get-address", authentication, getAddress);

router.route("/").get(getAllUser).post(createUser);
router
  .route("/:id")
  .get(authentication, authorizationRole("admin"), getUser)
  .patch(authentication, authorizationRole("admin"), updateUser)
  .delete(authentication, authorizationRole("admin"), deleteUser);

module.exports = router;
