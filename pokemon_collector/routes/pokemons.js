var express = require('express');
var router = express.Router();
const pokemonsCtrl = require('../controllers/pokemons');

/* GET users listing. */
router.get('/', pokemonsCtrl.index);
router.get('/new', pokemonsCtrl.new);
router.post('/:pokemonId/users/:userId', pokemonsCtrl.addToUser);

module.exports = router;
