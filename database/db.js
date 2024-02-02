const mongoose = require('mongoose');


const mongoURI = process.env.DATABASE_URL;

mongoose.connect(mongoURI);

const db = mongoose.connection;

db.on('connected', () => {
  console.log('[*] Connected to MongoDB DataBase');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

