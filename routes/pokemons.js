var express = require('express');
var router = express.Router();
const pokemonsCtrl = require('../controllers/pokemons');

/* GET users listing. */
router.get('/', pokemonsCtrl.index);
router.get('/new', pokemonsCtrl.new);
router.get('/:id', pokemonsCtrl.show);
router.post('/:pokemonId/users/:userId', pokemonsCtrl.addToUser);
router.put('/:id', pokemonsCtrl.update);
router.delete('/:id', pokemonsCtrl.delete);

module.exports = router;
