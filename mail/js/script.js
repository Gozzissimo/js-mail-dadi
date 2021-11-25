// Mail
// Chiedi all’utente la sua email,
//     controlla che sia nella lista di chi può accedere,
//         stampa un messaggio appropriato sull’esito del controllo.


// pulsante
generate.addEventListener ('click', function() {
    
    // array
    const userEmails = ['paolo.rossi@gmail.com', 'marco.bianchi@yahoo.com', 'giacomo.verdi@tin.it'];

    // email inserita
    const userEmail = document.getElementById('email').value;
    
    // Boolean
    let find = false; 
    
    // ciclo
    for (let i = 0; i < userEmails.length; i++) {
        
        const element = userEmails[i];
        
        if (userEmail == element) {
            find = true;
        }
    }
    
    const answer = document.createElement('div');
    const container = document.querySelector('.container');

    if (find == true) {
        answer.innerHTML = ('La tua email è corretta!');
    } else {
        answer.innerHTML = ('Mi dispiace, la tua email non è nella lista');
    }

    container.append(answer);
});
