const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

// Get the MongoDB URI from the configuration file
const mongoURI = config.get('mongoURI');

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
