const request = require('request');
const rootURL = 'https://pokeapi.co/api/v2/';
const Pokemon = require('../models/pokemon')

module.exports = {
    index,
    new: newPokemon,
    create,
}

function index(req, res) {
    let account = req.user
    res.render('pokemons/index', { title: 'My Pokemon', account})
}

function newPokemon(req, res) {
    let account = req.user
    const pokemonName = req.query.name.toLowerCase()
    request(
        `${rootURL}pokemon/${pokemonName}`,
        function(err, response, body) {
            let pokemonData = JSON.parse(body);
            const pokemon = new Pokemon(pokemonData)
            pokemon.pokemonId = pokemonData.order
            for (i = 0; i < pokemonData.types.length; i++) {
                pokemon.type[i] = pokemonData.types[i].type.name
            }
            pokemon.stats[0].hp = pokemonData.stats[0].base_stat
            pokemon.stats[1].attack = pokemonData.stats[1].base_stat
            pokemon.stats[2].defense = pokemonData.stats[2].base_stat
            pokemon.stats[3]['special-attack'] = pokemonData.stats[3].base_stat
            pokemon.stats[4]['special-defense'] = pokemonData.stats[4].base_stat
            pokemon.stats[5].speed = pokemonData.stats[5].base_stat
            pokemon.sprite = pokemonData['sprites']['other']['official-artwork']['front_default']
            pokemon.spriteSmall = pokemonData['sprites']['front_default']
            pokemon.save(function(err) {
                if (err) {
                    console.log(err)
                    res.redirect('/pokemons')
                }
                console.log(`------------------------------------${pokemon}`)
                res.render( 'pokemons/new', {pokemonData, title: 'My Pokemon', account, pokemon});
            })
        }
      );
}

function create(req, res) {
    console.log(req.body)
    
    Pokemons.create(req.body, function (err, pokemon) {
        res.redirect('/performers/new');
      });
}