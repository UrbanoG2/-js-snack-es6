// Scrivere una funzione (e lanciarla :razzo:) che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.


// const arrNumbers = [5, 61, 22, 34, 74, 15, 26];


// function myFunction (array, numA, numB) {

//     const included = array.filter(element => element > numA &&element < numB);

//     console.log(included);

//     return included
// }

// myFunction (arrNumbers, 25, 70);


const arrNumbers = [5, 61, 22, 34, 74, 15, 26];


function myFunction (array, numA, numB) {

    let included = array.filter((element, index) => {

       return index > numA && index < numB;


    });


    return included
}

 let result = myFunction (arrNumbers, 1, 4);

 console.log(result);