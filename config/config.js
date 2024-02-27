// MongoDB configuration
let database = "mongodb://localhost:27017/e_Commerce_App";
let SERVER_PORT = 3000;

exports.SERVER_POINT = "LOCAL";

switch (this.SERVER_POINT) {
  case "QA":
    database = "mongodb://localhost:27017/e_Commerce_App";
    SERVER_PORT = 3010;
    break;
  default:
    database = "mongodb://localhost:27017/e_Commerce_App";
    SERVER_PORT = 3010;
    break;
}

exports.database = database;
exports.port = SERVER_PORT;
