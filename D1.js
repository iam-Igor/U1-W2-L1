/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

// In JS abbiamo 5 principali datatype:
// 1)String - Sono delle sequenze di caratteri, racchiuse con gli apici " " oppure ' '.
// 2)Number - Si usa per dare alla variabile un valore numerico es. 5 oppure 10.50.
// 3)Boolean - Si usa per definire se una affermazione e vera o falsa. Si definisce con true oppure false.
// 4)Null - Si usa quando volutamente non si vuole assegnare un valore ad una variabile
// 5)Undefined - Quando si dichiara una variabile ma non le si da un valore. 

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let Name = 'Ygor'


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1=12
let number2=20

console.log(number1 + number2)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x= 12
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
Name = 'garofalo'
const anni =28
 // const anni =30   //la console ci darà errore in quanto la variabile const è stata gia dichiarata con un valore assegnato precedentemente, in questo caso 28. L'output della console sara: Identifier 'anni' has already been declared

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number3 = 4

let differenza = number3 - x
console.log (number3 - x) //per visuallizzarlo in console usiamo console.log()
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = 'john'
let name2 = 'John'

console.log (name1 === name2 )  // false


console.log (name1 === name2.toLowerCase() )  //true



