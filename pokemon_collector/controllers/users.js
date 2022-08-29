const User = require('../models/user')

module.exports = {
    index,
    new: newUser,
    create,
}

function index(req, res) {
    console.log(req.user)
    User.find({googleId: req.user.googleId}, function(err, account) {
        console.log(account.name)
        let account1 = req.user
        res.render('./users/show', {title: 'Trainer Details', account, account1})
    })
}

function newUser(req, res) {
    res.render('users/new', { title: 'Ah, a new trainer!'});
}

function create(req, res) {
    req.user.customName = req.body.customName
    req.user.avatar = req.body.avatar
    req.user.save(function(err) {
        if (err) {
            console.log(err)
            return res.render('users/new', { title: 'Ah, a new trainer!'});
        }
        res.redirect('/users')
    })
}
