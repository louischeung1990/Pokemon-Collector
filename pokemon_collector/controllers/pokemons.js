
module.exports = {
    index,
}

function index(req, res) {
    res.render('pokemon/index', { title: 'My Pokemon Collection'})
}