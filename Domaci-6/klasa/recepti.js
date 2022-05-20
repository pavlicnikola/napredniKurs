class Sastojak {
    constructor(ime, kolicina, cena) {
        this.ime = ime
        this.kolicina = kolicina
        this.cena = cena
    }

    ukupnaCena() {
        return `Ukupna cena je ${parseInt(this.kolicina) * parseFloat(this.cena)} dinara`
    }
}

let slatkaPavlaka = new Sastojak('slatka pavlaka', '500 mililitara', '1.11111 dinara po mililitru')
let kiselaPavlaka = new Sastojak('kisela pavlaka', '400 grama', '0.25 dinara po gramu')
let secerUPrahu = new Sastojak('secer u prahu', '100 grama', '0.3 dinara po gramu')
let mleveniKeks = new Sastojak('mleveni keks', '500 grama', '0.66 dinara po gramu')
let maline = new Sastojak('maline', '400 grama', '1.075 dinara po gramu')

let Sastojci = [slatkaPavlaka, kiselaPavlaka, secerUPrahu, mleveniKeks, maline]

class Recept {
    constructor(naziv, tezina, Sastojci) {
        this.naziv = naziv
        this.tezina = tezina
        this.Sastojci = Sastojci
    }

    ukupnaCena() {
        let ukupnaCena = 0
        Sastojci.forEach(Sastojak => {
            ukupnaCena += Sastojak.cena
        })

        return `Ukupna cena ovog recepta je ${ukupnaCena}`
    }

    ispisRecepta() {
        return
    }
}

let tortaOdMalina = new Recept('torta od malina', 'brz i lak letnji recept', )