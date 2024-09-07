function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColor(elementId){
    const eleemt = document.getElementById(elementId);
    eleemt.classList.add('bg-orange-400')
}

function getARandomAlphabet(){
    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetsString.split('');
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    
    return alphabet;
}