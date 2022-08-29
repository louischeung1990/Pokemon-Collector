const User = require('../models/user')

module.exports = {
    index,
    new: newUser,
    create,
}

function index(req, res) {
     console.log(`req.user: ${req.user}`)
    User.find({googleId: req.user.googleId}, function(err, accounts) {
        res.render('./users/show', {title: 'Check Account', accounts})
    })
}

function newUser(req, res) {
    // console.log(`req.user: ${req.user}`)
    // console.log(`req.query.name: ${req.query.name}`)
    res.render('users/new', { title: 'Ah, a new trainer!'});
}

function create(req, res) {
    console.log(`------------------------------`)
    console.log(req.user)
    const user = new User(req.user)
    user.createdAt
    user.save(function(err) {
        if (err) {
            console.log(err)
            return res.render('users/new', { title: 'Ah, a new trainer!'});
            
        }
        console.log('-----------------------------------------success')
        res.redirect('/pokemons')
    })
}
