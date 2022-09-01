const User = require('../models/user')

module.exports = {
    index,
    new: newUser,
    create,
    show,
    update,
}

//this function is currently not in use, will be used for admin account in the future
function index(req, res) {
    // User.find({googleId: req.user.googleId}, function(err, account) {
    //     res.render('users/show', {title: 'Trainer Details', account})
    // })
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
        let id = req.user.googleId
        res.redirect(`/users/${id}`)
    })
}

function show(req, res) {
    if (!req.user) {
        return res.redirect('/auth/google')
     }
console.log(`log no1`)
    
    console.log(req.user)
    console.log(`----------------------------------log2`)
    let account = req.user;
    let dateCreated = account.dateCreated.toISOString().slice(0,10);
    res.render('./users/show', {title: 'Trainer Details', account, dateCreated})
}

function update(req, res) {
    User.find({googleId: req.user.googleId}, function(err, account) {
        req.user.customName = req.body.customName
        req.user.save(function(err) {
            if (err) {
                console.log(err)
                return res.render('./users/show', {title: 'Trainer Details', account, dateCreated});
            }
            let id = req.user.googleId
            res.redirect(`/users/${req.user.googleId}`)
        })
    })
}