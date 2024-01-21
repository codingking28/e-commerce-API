const mongoose = require("mongoose");

//DB Connection
mongoose.connect(
  "mongodb://localhost/ecommerceDB",
  { useNewUrlParser: true, useUnifiedTopology: true }
  //   (err) => {
  //     if (!err) {
  //       console.log("DB Connected Successfully");
  //     }
  //   }
);
