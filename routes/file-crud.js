const fs = require("fs");
const path = require("path");
const jsonData = require("./resources/learninghistory.json");
const {
  searchRecords,
  getConsolidatedRecords,
  getRecordsByStatus,
} = require("../helpers/file-crud");

let files = {
  getRecordData: (req, res, next) => {
    try {
      const limit = req.body.pageLimit;
      const activePage = req.body.activePage;
      const search = req.body.searchParam;

      let ele = limit * activePage;
      let startIndex = ele - limit;
      let resData = [];
      if (search == "") {
        resData = jsonData.root.records.slice(startIndex, ele);
      } else {
        resData = searchRecords(jsonData.root.records, search);
      }
      res.json({ data: resData, count: resData.length });
    } catch (err) {
      console.log(err);
    }
  },

  getDashboardData: (req, res, next) => {
    try {
      let resData = jsonData.root.records;
      let recordArr = getConsolidatedRecords(resData);
      let activeRec = getRecordsByStatus("Record is valid");
      res.json({
        recordsCount: recordArr.length,
        usersCount: resData.length,
        activeSession: activeRec.length,
      });
    } catch (err) {
      console.log(err);
    }
  },

  createRecords: (req, res, next) => {
    try {
      let body = req.body;
      var json = jsonData;
      json.root.records.push(body);
      console.log(json);
      fs.writeFileSync(
        `${__dirname}/resources/learninghistory.json`,
        JSON.stringify(json),
        "utf8"
      );
      res.json({ res: jsonData.root.records.length });
    } catch (err) {
      console.log(err);
    }
  },

  deleteRecord: (req, res, next) => {
    try {
      let body = req.body;
      // console.log(jsonData.root.records, req.body);
      var json = jsonData;

      json.root.records = jsonData.root.records.filter((item) => {
        return item.delegate_id !== body.delegate_id;
      });
      console.log(json);
      fs.writeFileSync(
        `${__dirname}/resources/learninghistory.json`,
        JSON.stringify(json),
        "utf8"
      );
      res.json({ res: jsonData.root.records.length });
    } catch (err) {
      console.log(err);
    }
  },
};
module.exports = files;
