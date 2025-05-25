const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./backend/config.env" });
const mongoose = require("mongoose");

process.on("uncaughtException", (err) => {
  console.log("UNHANDLED Exception! 💥 shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

const DB_URL = process.env.DB_URL.replace(
  "<db_password>",
  process.env.DB_PASSWORD
);

// MongoDB connection
mongoose
  .connect(DB_URL)
  .then(() => console.log("DB connected..."))
  .catch((err) => console.log(err));

// create server
const PORT = process.env.PORT || 5050;
const server = app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${process.env.PORT}...`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTIONS! 💥 shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
