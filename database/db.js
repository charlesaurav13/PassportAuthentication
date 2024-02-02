const mongoose = require('mongoose');
const dotenv = require("dotenv");
const { log } = require('console');

dotenv.config({path:"./cofig.env"})
const mongoURI = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/passport";

mongoose.connect(mongoURI);

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

