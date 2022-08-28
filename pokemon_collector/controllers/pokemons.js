
module.exports = {
    index,
}

function index(req, res) {
    res.render('main/index', { title: 'My Pokemon Collection'})
}