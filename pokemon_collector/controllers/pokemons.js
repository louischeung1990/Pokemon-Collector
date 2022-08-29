const Pokemon = require('../models/pokemon')

module.exports = {
    index,
}

function index(req, res) {
    res.render('pokemons/index', { title: 'My Pokemon Collection'})
}