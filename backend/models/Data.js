const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    // Define your schema here
    intensity: Number,
    likelihood: Number,
    relevance: Number,
    year: Number,
    country: String,
    topics: [String],
    region: String,
    city: String
});

module.exports = mongoose.model('Data', DataSchema);
