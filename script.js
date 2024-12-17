// DOM ELEMENTS
const numbersListElm = document.getElementById("numbers-list");





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

for(let i = 0; i < randomNumbers.length; i++) {
    numbersListElm.innerHTML += `<li>${randomNumbers[i]}</li>`;
}
