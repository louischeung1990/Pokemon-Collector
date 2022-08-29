/*--- constants ---*/

/*--- state ---*/

/*--- cached elements ---*/
const avatarEl = document.querySelectorAll('.avatar')
const avatarChoiceEl = document.getElementById('avatarChoice')

/*--- event listeners ---*/
for (let i = 0; i < avatarEl.length; i++) {
    avatarEl[i].addEventListener('click', selectAvatar)};


/*--- functions ---*/
function selectAvatar(e) {
    for (let i = 0; i < avatarEl.length; i++) {
        avatarEl[i].style.boxShadow = '';
    }
    avatarChoiceEl.value = e.target.src;
    e.target.style.boxShadow = '0 0 15px red';
    console.log(avatarChoiceEl.value)
}