// backend/controllers/dataController.js

const Data = require('../models/Data');

// @desc    Get all data
// @route   GET /api/data
// @access  Public
const getAllData = async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Add new data
// @route   POST /api/data
// @access  Public
const addData = async (req, res) => {
  const { end_year, intensity, sector, topic, insight, url, region, start_year, impact, added, published, country, relevance, pestle, source, title, likelihood } = req.body;

  try {
    const newData = new Data({
      end_year,
      intensity,
      sector,
      topic,
      insight,
      url,
      region,
      start_year,
      impact,
      added,
      published,
      country,
      relevance,
      pestle,
      source,
      title,
      likelihood
    });

    const data = await newData.save();
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getAllData,
  addData
};
