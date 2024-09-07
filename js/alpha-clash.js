// function playNow(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

function continiueGame(){
    const alphabets = getARandomAlphabet()
   const currentAlphabet = document.getElementById('current-alphabet');
   currentAlphabet.innerText = alphabets;
}

function playNow(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continiueGame()
}