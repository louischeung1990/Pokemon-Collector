/*--- constants ---*/

/*--- state ---*/
let currentView
let leftView

/*--- cached elements ---*/
const getUserViewEl = document.getElementById('get-user-view')
const getPokemonViewEl = document.getElementById('get-pokemon-view')
const getRosterViewEl = document.getElementById('get-roster-view')
// const userViewEl = document.getElementById('user-view')

/*--- event listeners ---*/
getUserViewEl.addEventListener('click', toggleActive)
getPokemonViewEl.addEventListener('click', toggleActive)
getRosterViewEl.addEventListener('click', toggleActive)

/*--- functions ---*/
// init();

function init() {
    currentView = 'user'
    getPokemonViewEl.classList.add('active')
    // leftView = 'user'
}

function toggleActive(e) {
    console.log(e.target)
    if (e.target === getUserViewEl) {
        currentView = 'user'
        getUserViewEl.classList.add('active')
        getPokemonViewEl.classList.remove('active')
        getRosterViewEl.classList.remove('active')

    } else if (e.target === getPokemonViewEl) {
        currentView = 'pokemon'
        getUserViewEl.classList.remove('active')
        getPokemonViewEl.classList.add('active')
        getRosterViewEl.classList.remove('active')
    } 
    else if (e.target === getRosterViewEl) {
        currentView = 'roster'
        getUserViewEl.classList.remove('active')
        getPokemonViewEl.classList.remove('active')
        getRosterViewEl.classList.add('active')
    }
}

// function renderLeft() {
//     userViewEl.style.display = 
//         leftView === 'user' ? 'block' : 'none';
// future plan is to have create/edit forms (trainer, pokemon, rosters) on the left bar
// dynamically rendered with AJAX
// }
