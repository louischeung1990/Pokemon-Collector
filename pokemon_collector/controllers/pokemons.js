const request = require('request');
const rootURL = 'https://pokeapi.co/api/v2/';
const Pokemon = require('../models/pokemon')
const User = require('../models/user')

module.exports = {
    index,
    new: newPokemon,
    addToUser,
    show,
    update,
    delete: deletePokemon,
}

function index(req, res) {
    User.findById(req.user.id).populate('pokemonCollected').exec(function(err, account){
        let noRows = Math.ceil(account.pokemonCollected.length/6)
        let imageArray = []
        let pkmnType = []
        let url = []
        let pkmnName = []
        for (i = 0; i < account.pokemonCollected.length; i++) {
            imageArray[i] = account.pokemonCollected[i].spriteSmall
            pkmnType[i] = account.pokemonCollected[i].type[0]
            url[i] = account.pokemonCollected[i].id
            pkmnName[i] = account.pokemonCollected[i].name
        }
        res.render('pokemons/index', { title: 'My Pokemon', account, noRows, imageArray, pkmnType,
         url, pkmnName})
    })
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
                res.render( 'pokemons/new', {pokemonData, title: 'My Pokemon', account, pokemon});
            })
        }
      );
}

function addToUser(req, res) {
    Pokemon.findById(req.params.pokemonId, function(err, pokemon) {
        pokemon.moveSet = req.body.moveSet
        pokemon.customName = req.body.customName
        pokemon.save(function (err) {
            req.user.pokemonCollected.push(pokemon)
            req.user.save(function(err) {
                if (err) {
                    console.log(err)
                    return res.render('pokemons/index', { title: 'My Pokemon', account})
                }
                res.redirect('/pokemons/')
            })
        })
    })
}

function show(req, res) {
    let account = req.user
    Pokemon.findById(req.params.id, function (err, pokemon) {
        res.render('pokemons/show', { title: 'My Pokemon', pokemon, account})
    })
}

function update(req, res) {
    Pokemon.findById(req.params.id, function(err, pokemon) {
        pokemon.customName = req.body.customName
        pokemon.save(function (err) {
            if (err) {
                console.log(err)
                return res.render('./pokemons/show', {title: 'My Pokemon', pokemon})
            }
            res.redirect(`/pokemons/${pokemon.id}`)
        })
    })
}

function deletePokemon(req, res) {
    Pokemon.findOneAndDelete({_id: req.params.id}, function(err, pokemon) {
        res.redirect('/pokemons')
    })
}