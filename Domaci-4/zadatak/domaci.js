// random generisanje brojeva u nizu od 1 do 20, a da se ni jedan ne ponovi
let niz = []

for (let i = 0; i < 20; i++) {
    let generator = Math.floor(Math.random() * 20) + 1

    while(niz.includes(generator)) {
        generator = Math.floor(Math.random() * 20) + 1
    }

    niz.push(generator)
}

console.log(niz);