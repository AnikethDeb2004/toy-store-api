// config/db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/toy_store', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));