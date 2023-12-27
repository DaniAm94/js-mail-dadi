// Recupero gli elementi html in cui andrò a stampare il risultato
const container = document.querySelector('.container')
const winnerShow = document.createElement('h1');
const play = document.getElementById('play')
const roll1 = document.createElement('h2');
const roll2 = document.createElement('h2');


play.addEventListener('click', function () {
    const userResult = document.createElement('div');
    const cpuResult = document.createElement('div');


    // Creo una variabile per il risultato
    let result = 'Il risultato è un pareggio :/'

    const player = Math.floor(Math.random() * 6) + 1;
    console.log(player);
    userResult.classList.add(`face-${player}`);

    const computer = Math.floor(Math.random() * 6) + 1;
    console.log(computer);
    cpuResult.classList.add(`face-${computer}`);

    if (player > computer) {
        result = 'Congratulazioni Hai Vinto! :)';
    } else if (player < computer) {
        result = 'Hai perso! :(';
    }

    winnerShow.innerText = result;
    roll1.innerText = 'Il tuo lancio: ';
    roll1.appendChild(userResult);
    roll2.innerText = 'Il computer: ';
    roll2.appendChild(cpuResult);

    container.appendChild(winnerShow);
    container.appendChild(roll1);
    container.appendChild(roll2);
})
