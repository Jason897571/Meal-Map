const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://kinggs1314:bjPshMK6YAyeVx3o@meal-map.2udbtgi.mongodb.net/'
);

module.exports = mongoose.connection;
