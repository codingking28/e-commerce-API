const { default: mongoose } = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
  _id: { type: Number, index: true, require: true },
  name: { type: String, index: true, require: true },
  mail: { type: String, index: true, require: true },
  createdAt: { type: Date, default: Date.now() },
  role: { type: String, trim: true, index: true, require: true },
});

let users = mongoose.model("users", userSchema, "users");

// userSchema.post("save", (doc, next) => {
//   try {
//   } catch {}
// });

users.on("index", function (err) {
  if (err) {
    console.log(err.message);
  }
});
module.exports = users;
