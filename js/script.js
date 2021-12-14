// Scrivere una funzione (e lanciarla :razzo:) che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.


const arrNumbers = [5, 61, 22, 34, 74, 15, 26];


myFunction (arrNumbers, 30, 70);


function myFunction (array, numA, numB) {

    let element = "";

    const included = array.filter(element => element > numA &&element < numB);

    console.log(included);
}


