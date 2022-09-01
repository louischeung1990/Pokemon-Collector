const User = require('../models/user')

module.exports = {
    index,
}

function index(req, res) {
    let account = req.user
    res.render('rosters/index', {title: 'My Rosters', account})
}