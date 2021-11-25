// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// pulsante
generate.addEventListener('click', function () {
    
    // rimozione colori
    const result = document.getElementById('result')
    result.classList.remove('green');
    result.classList.remove('red');


    // calcolatore dadi
    const userNumber = Math.floor(Math.random() * 6) + 1;
    // console.log(userNumber);
    const humanDice = document.getElementById('human')
    humanDice.innerHTML = userNumber
    
    const pcNumber = Math.floor(Math.random() * 6) + 1;
    // console.log(pcNumber);
    const machineDice = document.getElementById('machine')
    machineDice.innerHTML = pcNumber

    
    // condizioni
    if (userNumber > pcNumber) {
        // // console.log('La razza umana ha prevalso');
        result.innerHTML = 'La razza umana ha prevalso'
        result.classList.add('green');
        
    } else if (userNumber < pcNumber) {
        // console.log('Le macchine hanno preso il controllo');
        result.innerHTML = 'Le macchine hanno preso il controllo'
        result.classList.add('red');
    } else {
        // console.log('Non ci sono né vincitori, né vinti...');
        result.innerHTML = 'Non ci sono né vincitori, né vinti'
    }

});