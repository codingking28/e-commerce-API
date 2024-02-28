const express = require("express");
const router = express.Router();
const users = require("./users");
const files = require("./file-crud");

router.get("/welcome", function (req, res, next) {
  return res.send("Welcome*****");
});
router.post("/create", users.create);
router.post("/getData", files.getRecordData);
router.get("/getDashboardData", files.getDashboardData);
router.post("/createData", files.createRecords);
router.post("/deleteData", files.deleteRecord);

module.exports = router;
