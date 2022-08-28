var express = require('express');
var router = express.Router();
const pokemonsCtrl = require('../controllers/pokemons');

/* GET users listing. */
router.get('/', pokemonsCtrl.index);


module.exports = router;
