const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
  
    quote: { type: String },
  },

  { collection: "mobile-user" }
);

// Pre-save hook to hash the password before saving the user
User.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});




const model = mongoose.model('UserData', User);

module.exports = model;
