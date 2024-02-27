const moment = require("moment");
const user_collection = require("../models/users");

let users = {
  create: (req, res, next) => {
    try {
      let updateField = {
        _id: 3,
        name: "test",
        mail: "test@gmail.com",
        // createdAt: { type: Date, default: Date.now() },
        role: "admin",
      };
      // new user_collection(updateField);
      user_collection.insertMany(updateField);
      // updateField.save();
      res.json({
        message: "Success",
        http_code: 200,
      });
    } catch (exp) {
      console.log("error", exp);
    }
  },
};
module.exports = users;
