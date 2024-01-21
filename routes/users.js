const moment = require("moment");

let users = {
  create: (req, res, next) => {
    try {
      console.log("try block", req);
    } catch (exp) {
      console.log("error", exp);
    }
  },
};
module.exports = users;
