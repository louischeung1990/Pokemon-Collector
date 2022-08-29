var express = require('express');
var router = express.Router();
const passport = require('passport')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pokemon Collector' });
});

//we get sent to this route when user clicks on "login with Google"
router.get('/auth/google', passport.authenticate (
  'google',
  {scope: ['profile', 'email']}
))

//AFTER user signs in with Google (based on the GOOGLE_CALLBACK)
router.get('/oauth2callback', passport.authenticate('google', {failureRedirect: '/'}), function(req, res) {
  console.log(req.user)
  if (req.user.pokemonCollected.length === 0) {
    res.render('users/new', { title: 'Ah, a new trainer!'})
  } else {
  res.redirect('/users')
  }
})

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function(err) {
    res.redirect('/');
  });
});

module.exports = router;