const express = require('express');
const router = express.Router();

const UrlController = require('../controllers/url.controller');

router.post('/', UrlController.insertUrl)
router.get('/:url', UrlController.redirectUrl)

module.exports = router;