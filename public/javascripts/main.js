/*--- constants ---*/

/*--- state ---*/

/*--- cached elements ---*/
const getUserViewEl = document.getElementById('get-user-view')
const getPokemonViewEl = document.getElementById('get-pokemon-view')
const getRosterViewEl = document.getElementById('get-roster-view')
const submitMovesEl = document.getElementById('submitMoves')
const movesChoiceEl = document.querySelector('#movesChoice')
const showMovesChoiceEl = document.getElementById('showMovesChoice')

/*--- event listeners ---*/
getUserViewEl.addEventListener('click', toggleActive)
getPokemonViewEl.addEventListener('click', toggleActive)
getRosterViewEl.addEventListener('click', toggleActive)
submitMovesEl.addEventListener('click', submitMoves)

/*--- functions ---*/

function toggleActive(e) {
    console.log(e.target)
    if (e.target === getUserViewEl) {
        
        getUserViewEl.classList.add('active')
        getPokemonViewEl.classList.remove('active')
        getRosterViewEl.classList.remove('active')

    } else if (e.target === getPokemonViewEl) {
       
        getUserViewEl.classList.remove('active')
        getPokemonViewEl.classList.add('active')
        getRosterViewEl.classList.remove('active')
    } 
    else if (e.target === getRosterViewEl) {
        
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