// config/db.js
const mongoose = require('mongoose');
require('dotenv').config(); // Ensure dotenv is imported and configured here

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Removed deprecated options
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process if the connection fails
  }
};

module.exports = connectDB;
