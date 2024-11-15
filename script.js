/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
    I principali datatype in JavaScript sono:
    -String: cioè una sequenza di caratteri delimitati da doppio apice o apice singolo;
    -Number: un numero;
    -Boolean: vero o falso;
    -Null o Undefined: 
    Null vuol dire che il mio dato non ha valore, è vuoto;
    Undefined vuol dire che al mio dato non gli è stato ancora dato valore;
 */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/*
    Un oggetto è una raccolta di coppia di valori, esempio:
    name:"Marco";
    age:21;
    blonde:false;
*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/*
    let num1 = 12;
    let num2 = 20;
    let somma = num1 + num2;
    console.log("La somma è " + somma)
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* 
    let x = 12;
*/

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* 
    let name="Marco" 
*/



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* 
    let num3 = 4
    let differenza = num3 - x
    console.log("La differenza è " + differenza)
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/*
    let name1 = "john"
    let name2 = "John"
    let diverso = name1 !== name2
    console.log(diverso)
    let minuscolo1 = name1.toLowerCase()
    let minuscolo2 = name2.toLowerCase()
    console.log(minuscolo1 === minuscolo2)
*/