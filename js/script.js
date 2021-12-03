// Descrizione:
// Visualizzare in pagina 5 numeri casuali poi fateli sparire.

// Da lì parte un timer di 30 secondi.

// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

// 1. generare un array con 5 numeri casuali (facciamo da uno a cento per es.) e metterli in pagina

// Array
const memoryArray = generateNumbers(1, 100, 5);
// console.log(memoryArray);

// facciamo apparire i numeri in pagina
let NumbersToMemory = document.getElementById('memory-numbers');
NumbersToMemory.innerHTML = memoryArray;

// 2.creare una funzione temporale che va da 0 a 30 secondi.
// setTimeout(function() {
//     NumbersToMemory.innerHTML = '';
//     callingPrompts();
// }, 30000);




// FUNZIONI

/** FUNZIONE PER GENERARE UN ARRAY DI NUMERI CASUALI
 * 
 * @param {*} min Numero Minimo
 * @param {*} max Numero Massimo
 * @param {*} arrayLength Quanti Numeri vuoi generare
 * @returns Array di numeri casuali
 */

function generateNumbers(min, max, arrayLength) {
    const numbers = [];

    while (numbers.length < arrayLength) {

        let number = Math.floor(Math.random() * (max - min + 1)) + min;

        if (!numbers.includes(number)) {
            numbers.push(number);
        }
    }
    return numbers;
}


/** FUNZIONE PER AVERE UN ARRAY CON x PROMPT PER INSERIRE DEI NUMERI
 * 
 * @param {*} arrayLength Numero di Prompt che volgio generare
 * @returns Un array di Numeri
 */

function memoryPrompts(arrayLength) {
    const promptNumbers = [];
    

    while (promptNumbers.length < arrayLength) {

        let number = parseInt(prompt('Inserisci un numero tra quelli che hai visto'));

        if (!promptNumbers.includes(number)) {
            promptNumbers.push(number);
        } else {
            alert('Attenzione! questo numero è gia stato inserito');
        }
    
    }

    return promptNumbers
}