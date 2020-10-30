const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String, required: true },
  usuario: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "Admin"},
  date: { type: Date, default: Date.now }
});

module.exports = model("User", UserSchema);
