const mongoose = require("mongoose");
const config = require("./config/config");
let router = require("./routes/index");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/app", router);

app.listen(config.port, () => {
  //DB Connection
  mongoose.connect("mongodb://localhost/ecommerceDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", (err) => {
    console.log("error****", err);
  });
  db.once("open", () => {
    console.log("connected****", config.port);
  });
});
