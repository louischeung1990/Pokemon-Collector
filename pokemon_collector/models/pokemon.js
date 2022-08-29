var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    customName: String,
    //pokedex order
    pokemonId: Number,
    type: [{
        type: String,
    }],
    moveSet: [{
        type: String,
    }],
    stats: { type: [{
        hp : {type: Number},
        attack : {type: Number},
        defense : {type: Number},
        'special-attack' : {type: Number},
        'special-defense' : {type: Number},
        speed : {type: Number},
    }]},
    sprite: String,
})