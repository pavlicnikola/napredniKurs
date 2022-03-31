// zadatak: napisati funkciju koja proverava koliko se puta odredjeni element pojavljuje u nizu

        // let niz = [1,2,3,4,5,1,1,6,1,7,1]
        // let element = 1

        // function provera(niz, element) {
        //     let brojac = 0
        //     for(let i = 0; i < niz.length; i++) {
        //         if(niz[i] === element) {
        //             brojac++
        //         }
        //     }
        //     // return `Pojavljuje se ${brojac} puta`
        // }
        //     console.log(provera(niz, element));

// zadatak: zbir 

        // function zbir(a = 100, b = 100) {
        //     return a + b
        // }
        //     console.log(zbir(100, 100));

// zadatak: napisati funkciju koja proverava da li element postoji u nizu

        // let niz = [1,2,3,4,5,1,1,6,1,7,1]
        // let element = 1

        // function provera(niz, element) {
        //     for(let i = 0; i < niz.length; i++) {
        //         if(niz[i] === element) {
        //             return "postoji"
        //         }
        //     }
        //         return "ne postoji"
        // }
        //     console.log(provera(niz, element));

        // const postojiUnizu = (niz, element) => {
        //     let provera = false
        //     niz.forEach(broj => {
        //         if(broj === element) {
        //             provera = true
        //         }
        //     })
        //     return provera
        // }
        //     console.log(postojiUnizu(niz, element));

// zadatak: napisati funkciju koji proverava da li je broj prost

        // let broj = 73

        // function provera(broj) {
        //     for(let i = 2; i < Math.sqrt(broj); i++){
        //         if(broj % i == 0) {
        //             return "nije prost"
        //         }
        //     }
        //     return "prost je"
        // }
        //     console.log(provera(broj));

// zadatak: napisati funkciju koja sabira cifre u brojuS

        // let broj = 1050

        // function zbir (broj) {
        //     let cifra
        //     let zbir = 0
        //     while(broj > 0) {
        //         cifra = broj % 10
        //         broj = Math.floor(broj / 10)
        //         zbir += cifra
        //     }
        //     return zbir
        // }
        //     console.log(zbir(broj));

// *
// * *
// * * *
// * * * *
// * * * * *

// let n = 5
// let str = ''

// for(let i = 1; i <= n; i++) {
//     let str = ''
//     for(let j = 1; j <= n; j++) {
//         if(i >= j ) {
//             str += '* '
//         }
//     }
//     console.log(str);
// }

//      *
//     * *
//    * * *
//   * * * *
//  * * * * *

// let n = 5
// let str = ''

// for(let i = 1; i <= n; i++) {
//     let str = ''
//     for(let j = 0; j < n; j++) {
//         if( n - i <= j ) {
//             str += '* '
//         } else {
//             str += ' '
//         }
//     }
//     console.log(str);
// }