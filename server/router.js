const express = require('express');

const router = express.Router();

router.use('/todos', require('./todos/routes'));

module.exports = router;
