
// PRENDO GLI ELEMENTI HTML
const inputMail = document.getElementById('email');
const button = document.getElementById('button');
const error = document.getElementById('alert');
const success = document.getElementById('success');
const undoButton = document.getElementById('undo-button');


// Creo un array di email
const emailAddresses = ['dani.amico94@gmail.com', 'marco.lanci@gmail.com', 'arianna.costanzo@hotmail.it', 'pippo.pluto@alice.com'];

// Collego il bottone ad un event listener
button.addEventListener('click', function () {

    // Creo un flag di controllo e lo inizializzo a false
    let isValid = false;

    // Prelevo l'email inserita dall'utente nella casella di input
    const email = inputMail.value.trim();

    // Inizializzo un ciclo for per controllare che l'email inserita dall'utente sia nella mia lista
    for (let i = 0; i < emailAddresses.length; i++) {

        // In caso di esito positivo forzo la chiusura del ciclo for e modifico il valore del flag a true
        if (email === emailAddresses[i]) {
            i = emailAddresses.length;
            isValid = true;
        }
    }

    // Se il flag è true mostro l'esito positivo in pagina tramite manipolazione di classi css
    if (isValid) {
        error.classList.add('d-none')
        inputMail.classList.remove('input-alert');
        success.classList.remove('d-none')
        inputMail.classList.add('input-success');
    } else {    // Se il flag è false mostro l'esito negativo in pagina tramite manipolazione di classi css
        error.classList.remove('d-none')
        inputMail.classList.add('input-alert');
        success.classList.add('d-none')
        inputMail.classList.remove('input-success');
    }
})

// Implementato un bottone annulla per svuotare il campo di input e rimuovere eventuali alert
undoButton.addEventListener('click', function () {
    inputMail.value = '';
    inputMail.focus();
    error.classList.add('d-none')
    inputMail.classList.remove('input-alert');
    success.classList.add('d-none')
    inputMail.classList.remove('input-success');

})

// Il click sul campo di input lo svuota e rimuove eventuali alert, analogamente al bottone annulla
inputMail.addEventListener('click', function () {
    inputMail.value = '';
    error.classList.add('d-none')
    inputMail.classList.remove('input-alert');
    success.classList.add('d-none')
    inputMail.classList.remove('input-success');

})
































