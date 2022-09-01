var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');

/* GET users listing. */
// router.get('/',usersCtrl.index);
router.get('/new', usersCtrl.new);
router.get('/:id', usersCtrl.show);
router.post('/', usersCtrl.create);
router.put('/:id', usersCtrl.update);

module.exports = router;