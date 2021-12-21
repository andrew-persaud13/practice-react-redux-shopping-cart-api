const mongoose = require('mongoose');
require('dotenv').config();

const db = () => {
  mongoose.connect(process.env.DB_URI, {}, () => {
    console.log('mongooooo');
  });
};

module.exports = db;
