/*--- constants ---*/

/*--- state ---*/
let currentView
let leftView

/*--- cached elements ---*/
const getPokemonViewEl = document.getElementById('get-pokemon-view')
const getRosterViewEl = document.getElementById('get-roster-view')
const userViewEl = document.getElementById('user-view')

/*--- event listeners ---*/
getPokemonViewEl.addEventListener('click', toggleActive)
getRosterViewEl.addEventListener('click', toggleActive)

/*--- functions ---*/
// init();

function init() {
    currentView = 'pokemon'
    getPokemonViewEl.classList.add('active')
    leftView = 'user'
}

function toggleActive(e) {
    if (currentView ==='pokemon') {
        currentView = 'roster'
        getPokemonViewEl.classList.toggle('active')
        getRosterViewEl.classList.toggle('active')
    } else {
        currentView = 'pokemon'
        getPokemonViewEl.classList.toggle('active')
        getRosterViewEl.classList.toggle('active')
    }
}

function renderLeft() {
    userViewEl.style.display = 
        leftView === 'user' ? 'block' : 'none';
// future plan is to have create/edit forms (trainer, pokemon, rosters) on the left bar
// dynamically rendered with AJAX
}
