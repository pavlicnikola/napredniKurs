class Sastojak {
    constructor(ime, kolicina, cena) {
        this.ime = ime
        this.kolicina = kolicina
        this.cena = cena
    }

    ukupnaCena() {
        return parseInt(this.kolicina) * parseFloat(this.cena)
    }

    opisSastojka() {
        return this.ime + ' ' + this.kolicina
    }
}

let slatkaPavlaka = new Sastojak('slatka pavlaka', '500 mililitara', '1.11111 dinara po mililitru')
let kiselaPavlaka = new Sastojak('kisela pavlaka', '400 grama', '0.25 dinara po gramu')
let secerUPrahu = new Sastojak('secer u prahu', '100 grama', '0.3 dinara po gramu')
let mleveniKeks = new Sastojak('mleveni keks', '500 grama', '0.66 dinara po gramu')
let maline = new Sastojak('maline', '400 grama', '1.075 dinara po gramu')
let sastojciZaTortuOdMalina = [slatkaPavlaka, kiselaPavlaka, secerUPrahu, mleveniKeks, maline]

let spagete = new  Sastojak('spagete', '200 grama', '0.15 dinara po gramu')
let zumance = new Sastojak('zumance', '2 komada', '13 dinara po komadu')
let slanina = new Sastojak('slanina (seckana)', '100 grama', '1.3 dinara po gramu')
let tecnaPavlaka = new Sastojak('tecna pavlaka', '200 mililitara', '0.5 dinara po mililitru')
let parmezan = new Sastojak('parmezan', '40 grama', '1.6 dinara po gramu')
let zutiSir = new Sastojak('zuti sir', '50 grama', '1.7 dinara po gramu')
let mleveniBiber = new Sastojak('mleveni biber', '1 kasicica', '5 dinara po gramu')
let beliLuk = new Sastojak('beli luk', '2 cena', '1 dinar po gramu')
let maslinovoUlje = new Sastojak('maslinovo ulje', '1 kasicica', '1 dinar po mililitru')
let so = new Sastojak('so', '1 kasicica', '0.2 dinara po gramu')
let persun = new Sastojak('persun', '1 kasicica (iseckan)', '1 dinar po gramu')
let sastojciZaKarbonaru = [spagete, zumance, slanina, tecnaPavlaka, parmezan, zutiSir, mleveniBiber, beliLuk, maslinovoUlje, so, persun]

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

        return `Ukupna cena ovog recepta je ${ukupnaCena} dinara`
    }

    opisRecepta() {
        let opis= ''
        this.sastojci.forEach(s => {
            opis += s.opisSastojka() + '; '
        })

        return opis
    }
}

let tortaOdMalina = new Recept('torta od malina', 'brz i lak letnji recept', sastojciZaTortuOdMalina)
let Karbonara = new Recept('Karbonara spagete', 'lak recept bez komplikacija', sastojciZaKarbonaru)

        console.log(Karbonara)