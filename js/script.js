//creo una variabile per il campo dell'input
//creo una variabile per il bottone
//creo la funzione per la verifica della palindromia
//creo l'evento per il click al bottone
//inserisco la funzione nell'evento
//nell'evento creo l'output per scrivere il risultato

//creo una variabile per il campo dell'input
const CampoPaEl = document.getElementById('campo-palindroma');

//creo una variabile per il bottone
const btnPalEl = document.getElementById('test-btn');

const parola = prompt('inserisci una parola');

//creo la funzione per la verifica della palindromia
function testPalindromia(parola) {
     // find the length of a string
     const len = parola.length;

     // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
 
        // check if first and last string are same
        if (parola[i] !== parola[len - 1 - i]) {
            
            return 'non è palindroma';

        } else {

            return 'palindromia confermata';

        }
    }
}

const value = testPalindromia(parola);

console.log(value);