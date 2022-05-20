class Sastojak {
    constructor(ime, kolicina, cena) {
        this.ime = ime
        this.kolicina = kolicina
        this.cena = cena
    }

    ukupnaCena() {
        return parseInt(this.kolicina) * parseFloat(this.cena)
    }

    opisSastojka () {
        return this.ime + ' ' + this.kolicina
    }
}

let slatkaPavlaka = new Sastojak('slatka pavlaka', '500 mililitara', '1.11111 dinara po mililitru')
let kiselaPavlaka = new Sastojak('kisela pavlaka', '400 grama', '0.25 dinara po gramu')
let secerUPrahu = new Sastojak('secer u prahu', '100 grama', '0.3 dinara po gramu')
let mleveniKeks = new Sastojak('mleveni keks', '500 grama', '0.66 dinara po gramu')
let maline = new Sastojak('maline', '400 grama', '1.075 dinara po gramu')

let sastojciZaTortuOdMalina = [slatkaPavlaka, kiselaPavlaka, secerUPrahu, mleveniKeks, maline]

class Recept {
    constructor(naziv, tezina, sastojci) {
        this.naziv = naziv
        this.tezina = tezina
        this.sastojci = sastojci
    }

    cenaRecepta() {
        let ukupnaCena = 0
        this.sastojci.forEach(s => {
            ukupnaCena += parseFloat(s.ukupnaCena())
        })

        return `Ukupna cena ovog recepta je ${ukupnaCena}`
    }

    opisRecepta() {
        
    }
}

let tortaOdMalina = new Recept('torta od malina', 'brz i lak letnji recept', sastojciZaTortuOdMalina)

console.log()