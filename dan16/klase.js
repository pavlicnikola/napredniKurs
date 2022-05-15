// let pravougaonik1 = {
//     duzina: 5,
//     sirina: 2,
//     povrsina: function () {
//         console.log(this.sirina * this.duzina);
//     }
// }
//     console.log(pravougaonik1.povrsina());

// let pravougaonik2 = {
//     duzina: 3,
//     sirina: 4,
//     povrsina: function () {
//         console.log(sirina * duzina);
//     }
// }

class pravougaonik {
    constructor(sirina, duzina) {
        // console.log('pozdrav iz konstruktora')
        this.sirina = sirina
        this.duzina = duzina
    }

    get duz() {
        return this.duzina
    }

    set duz(duzina) {
        this.duzina = duzina
    }

    get sir() {
        return this.sirina
    }

    set sir(sirina) {
        this.sirina = sirina
    }

    povrsina() {
        return this.sirina * this.duzina
    }

    obim () {
        return this.sirina * 2 + this.duzina * 2
    }

    opis() {
        console.log(this);
        return `Pravougaonik duzine ${this.duzina} i sirine ${this.sirina}`
    }
}

let p1 = new pravougaonik(5, 2)
p1.duz = 10
// console.log(p1.opis());

// Napraviti klasu Sastojak koja ima ime, kolicinu i cenu kao polja i metodu za racunanje ukupne cene.

class Sastojak {
    constructor(ime, kolicina, cena) {
        this.ime = ime
        this.kolicina = kolicina
        this.cena = cena
    }

    ukupnaCena() {
        console.log(this);
        return `Ukupna cena je ${parseInt(this.kolicina) * parseInt(this.cena)} dinara`
    }
}

let S = new Sastojak('Jelen pivo', '10 piva', '55 dinara')
console.log(S.ukupnaCena());