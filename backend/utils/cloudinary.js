const dotenv = require("dotenv");
const path = require("path");
const cloudinary = require("cloudinary").v2;

dotenv.config({ path: path.resolve(__dirname, "../config.env") });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

module.exports = cloudinary;
