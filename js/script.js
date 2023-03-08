//creo una variabile per il campo dell'input
//creo una variabile per il bottone
//creo la funzione per la verifica della palindromia
//creo l'evento per il click al bottone
//inserisco la funzione nell'evento
//nell'evento creo l'output per scrivere il risultato

/*
//creo una variabile per il campo dell'input
const CampoPaEl = document.getElementById('campo-palindroma');

//creo una variabile per il bottone
const btnPalEl = document.getElementById('test-btn');

//creo una costante per lo spazio dell'esito
const esito = document.getElementById('campo-esito');

//creo una variabile per la parola da analizzare
let parola = CampoPaEl;

//creo la funzione per la verifica della palindromia
function testPalindromia(text) {
    esito.innerHTML ="";
    // find the length of a string
    const len = parola.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (parola[i] !== parola[len - 1 - i]) {
            let newEl = document.createElement("b");
            newEl.innerText = "non vi è palindromia.";
            esito.append(newEl);
        } else {
            let newEl = document.createElement("b");
            newEl.innerText = "palindromia confermata!";
            esito.append(newEl);
        }
    }
}

//console.log("fuori l'evento", testPalindromia);

btnPalEl.addEventListener('click', function() {
    parola = CampoPaEl.value;
    esito.innerHTML = testPalindromia(parola);
    console.log("dentro l'evento", testPalindromia(parola));
});

/*
const value = testPalindromia();
*/

function testPalindromia() {
    // Variabile che definisce se la parola è palindroma o meno
    let parolaIsPalindroma = false

    // Variabile che prevela la parola/stringa dall'input
    const parola = document.getElementById('campo-palindroma').value;
    // Variabile che trasforma la parola/stringa in array di caratteri
    const parolaArray = parola.split('');

    // Variabile per modificare l'esito
    const esito = document.getElementById('campo-esito');

    // L'esito devve essere azzerato ogni volta che si inizia la verifica di un nuovo esito
    esito.innerHTML = '';

    // Variabile per sapere quanto è lunga la parola/stringa
    const len = parolaArray.length;

    // console log a caso
    console.log('parola', parola)
    console.log('len', len)

    // Variabile che mi prende la prima metà della parola
    const firstPartParola = parolaArray.filter((lettera, index) => index < len / 2)
    // Variabile che mi prende la seconda metà della parola
    const lastPartParola = parolaArray.filter((lettera, index) => index >= len / 2).reverse()

    // console log a caso
    console.log('firstPartParola', firstPartParola);
    console.log('lastPartParola', lastPartParola);

    // controllo se la parola è pari confrontando le lunghezza delle due parti
    parolaIsPalindroma = true;

    console.log(firstPartParola.length === lastPartParola.length)
    if (firstPartParola.length === lastPartParola.length) {
        //nel caso in cui è pari confronto ogni singolo elemento dei due array 
        for (let i = 0; i < firstPartParola.length; i += 1)
            if (firstPartParola[i] !== lastPartParola[i]) 
                parolaIsPalindroma = false;

        console.log('parolaIsPalindroma', parolaIsPalindroma)
        if (parolaIsPalindroma) {
            esito.innerHTML = 'Parola palindroma';
        } else {
            esito.innerHTML = 'Parola NON palindroma';
        }
    } else {
        let f = firstPartParola;
        let l = lastPartParola;

        if (f.length > l.length) f = f.filter((_, i) => i !== f.length - 1)
        else l = l.filter((_, i) => i !== l.length - 1)

        console.log('firstPartParola', f);
        console.log('lastPartParola', l);

        for (let i = 0; i < f.length; i += 1)
            if (f[i] !== l[i]) 
                parolaIsPalindroma = false;

        console.log('parolaIsPalindroma', parolaIsPalindroma)
        if (parolaIsPalindroma) {
            esito.innerHTML = 'Parola palindroma';
        } else {
            esito.innerHTML = 'Parola NON palindroma';
        }
    }
}

const btn = document.getElementById('test-btn')
btn.addEventListener('click', function() {
    testPalindromia()
});

//creo le variabili per gli elementi html
const evenOddEl = document.getElementById("scelta");
const userNumEl = document.getElementById('numero-utente');
const buttonEl = document.getElementById("play-btn");
const resultEl = document.getElementById("esito");

//creo la variabile del numero scelto dal computer

buttonEl.addEventListener('click', sumNum);

function sumNum(somma) {
    let randomNum = Math.floor(Math.random() * 5) + 1;
    console.log(randomNum);
    let result = (1 * userNumEl.value) + (1 * randomNum);
    resultEl.append(`risultato: ${result}`);
}

// function condizioni() {
//     if () {

//     }
// }