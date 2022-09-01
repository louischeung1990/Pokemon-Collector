var express = require('express');
var router = express.Router();
const rostersCtrl = require('../controllers/rosters');

router.get('/', rostersCtrl.index);

module.exports = router;