let niz = [1, 2, 3, 4, 5]

// let poslednji = niz.pop()
        // console.log(poslednji);

///////////////////////////

// let element = 10

// niz.push(element)
//         console.log(niz);

///////////////////////////

// let prviUnizu = niz.shift()
//         console.log(prviUnizu);

// niz.unshift() - isto kao push samo na 1. mesto

///////////////////////////

//  console.log(niz.includes(5))

        // const provera = (niz, element) => {
        //     let postoji = false
        //     niz.forEach(e => {
        //         if(e == element)
        //             postoji = true
        //     })
        //     return postoji
        // }
        //         console.log(provera(niz, 10));

///////////////////////////

// console.log(niz.join('-'))

///////////////////////////

// let niz2 = [10, 11, 12]

// console.log(niz.concat(niz2))

///////////////////////////

// console.log(niz.indexOf(3)) - lokacija elementa u nizu (krece da broji od 0)

///////////////////////////

// console.log(niz.reverse())

///////////////////////////

        // let a = 10
        // let b = 5

        // let tmp = a
        // a = b
        // b = tmp
        //         console.log(a, b);

// let nizImena = ['Marko', 'Petar', 'Nikola', 'Lazar', 'Milos']
        // console.log(nizImena.sort());

///////////////////////////

// niz.some() - ako pronadje bilo koji element koji odgovara uslovu, vraca true
// niz.every() -||- ako su svi elementi
// console.log(niz.every(element => element < 2))

///////////////////////////

// console.log(niz.find(element => element % 2 == 0)) - vraca prvi koji zadovoljava uslov
// niz.findIndex - znamo da postoji, vraca njegovu poziciju u nizu, krece da broji od 0

///////////////////////////

// console.log(niz.splice(2, 2, 100, 200))
// console.log(niz);

///////////////////////////

// console.log(niz.slice(2, 4))
// console.log(niz);

///////////////////////////

// console.log(niz.filter(element => element % 2 ==0))

///////////////////////////

// console.log( niz.map(element => {
//     if(element % 2 == 0) {
//         element *= 2
//     }
//     return element
// }) )
// console.log(niz);
