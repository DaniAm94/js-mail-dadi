// Recupero gli elementi html in cui andrò a stampare il risultato
const container = document.querySelector('.container')
const winnerShow = document.createElement('h1');
const rolls = document.createElement('h2');

// Creo una variabile per il risultato
let result = 'Il risultato è un pareggio :/'

const player = Math.floor((Math.random() * 6) + 1);
console.log(player);

const computer = Math.floor((Math.random() * 6) + 1);
console.log(computer);

if (player > computer) {
    result = 'Congratulazioni Hai Vinto! :)';
} else if (player < computer) {
    result = 'Hai perso! :(';
}

winnerShow.innerText = result;
rolls.innerText = `Il tuo lancio: ${player} 
Il computer: ${computer}`;

container.appendChild(winnerShow);
container.appendChild(rolls);
