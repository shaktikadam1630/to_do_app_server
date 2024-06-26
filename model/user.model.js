console.log('Loading user model...');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const db = require('../config/db'); // Adjust the path relative to user.model.js

const { Schema } = mongoose;
const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Hash the password before saving the user model
userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password for login
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const UserModel = db.model('User', userSchema); // Assuming db exports the connection

module.exports = UserModel;
