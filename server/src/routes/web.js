const express = require('express');
const { getHomePages, getCheck } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePages);

router.get('/check', getCheck);

module.exports = router;