/*--- constants ---*/

/*--- state ---*/
let currentView
let leftView

/*--- cached elements ---*/
const getUserViewEl = document.getElementById('get-user-view')
const getPokemonViewEl = document.getElementById('get-pokemon-view')
const getRosterViewEl = document.getElementById('get-roster-view')
// const userViewEl = document.getElementById('user-view')
const submitMovesEl = document.getElementById('submitMoves')
const movesChoiceEl = document.querySelector('#movesChoice')
const showMovesChoiceEl = document.getElementById('showMovesChoice')

/*--- event listeners ---*/
getUserViewEl.addEventListener('click', toggleActive)
getPokemonViewEl.addEventListener('click', toggleActive)
getRosterViewEl.addEventListener('click', toggleActive)
submitMovesEl.addEventListener('click', submitMoves)

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

function submitMoves(e) {
let movesArray = []
movesArray = Array.prototype.filter.call( document.getElementById("movesSelected").options, el => el.selected).map(el => el.value)
while (movesArray.length > 4) {
    movesArray.pop()
}
// document.getElementById('movesChoice0').value = movesArray[0]
// document.getElementById('movesChoice1').value = movesArray[1]
// document.getElementById('movesChoice2').value = movesArray[2]
// document.getElementById('movesChoice3').value = movesArray[3]
let movesList = movesArray.reduce(function(acc, move) {
    return `${acc} \r\n${move}`
}, '')
movesList = movesList.trim()
showMovesChoiceEl.value = movesList
}

// future plan is to have create/edit forms (trainer, pokemon, rosters) on the left bar
// dynamically rendered with AJAX
// function renderLeft() {
//     userViewEl.style.display = 
//         leftView === 'user' ? 'block' : 'none';
// }