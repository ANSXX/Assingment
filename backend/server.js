const mongoose = require('mongoose');
const express = require('express');
const app = express();

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/mydatabase'; // Update with your actual URI

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Your other server setup code...

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
