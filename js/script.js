// Scrivere una funzione (e lanciarla :razzo:) che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.


const arrNumbers = [5, 61, 22, 34, 74, 15, 26];


myFunction (arrNumbers, 1, 100);

function myFunction (array, numA, numB) {
    console.log(array, numA, numB);

    numA = array.length - array.length;
    numB = array.length;

    console.log(numA, numB);

    const included = array.filter(number => number > numA && number < numB);

    console.log(included);
    
    return included
}

