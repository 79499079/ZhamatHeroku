const { Schema, model } = require("mongoose");

const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  name: { type: String, required: true },
  usuario: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "User"},
  direccion: { type: String, default: "Sin dirección"},
  celular: { type: Number, default: "0000"},
  whatsapp: { type: Number, default: "0000"}  
}, {
  timestamps: true
}
);

UserSchema.methods.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = model("User", UserSchema);
