// backend/routes/dataRoutes.js

const express = require('express');
const router = express.Router();
const { getAllData, addData } = require('../controllers/dataController');

// @route   GET /api/data
// @desc    Get all data
// @access  Public
router.get('/', getAllData);

// @route   POST /api/data
// @desc    Add new data
// @access  Public
router.post('/', addData);

module.exports = router;
