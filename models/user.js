var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timeNow = function() {
  return new Date(Date.now());
}

const rosterSchema = new Schema({
    rostername: {
        type: String,
        required: true
    },
    description: String,
    sizeLimit: Number,
    pokemon: [{type: Schema.Types.ObjectId, ref: 'Pokemon'}],
})

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
    customName: String,
    dateCreated: {
      type: Date,
      default: timeNow,
      },
    avatar: String,
    pokemonCollected: [{type: Schema.Types.ObjectId, ref: 'Pokemon'}],
    rosters: [rosterSchema]
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('User', userSchema);