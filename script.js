// DOM ELEMENTS
const numbersListElm = document.getElementById("numbers-list");
const countdownElm = document.getElementById("countdown");




/**
 * Get random interger between a range.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


const randomNumbers = [];

while(randomNumbers.length < 5) {
    const number = getRndInteger(1, 100);
    if(!randomNumbers.includes(number)) {
        randomNumbers.push(number);
    }
}

let numbersList = ''
for(let i = 0; i < randomNumbers.length; i++) {
    numbersList += `<li>${randomNumbers[i]}</li>`;
}
numbersListElm.innerHTML = numbersList;

// countdown
let timer = 10;

countdownElm.innerHTML = timer;

const intervalID = setInterval(function(){
    timer--;
    if(timer === 0) {
        clearInterval(intervalID);
    }
    countdownElm.innerHTML = timer;
}, 1000);