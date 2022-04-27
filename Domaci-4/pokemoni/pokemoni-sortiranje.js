let Pikachu = {
    ime: 'Pikachu',
    vrsta: 'elektricni, mis',
    sposobnosti: 'staticki elektricitet',
    karakteristike: {
        napad: 55,
        odbrana: 40,
        brzina: 90,
        }
    }

let Blastoise = {
    ime: 'Blastoise',
    vrsta: 'vodeni, oklopni',
    sposobnosti: 'vodeni top',
    karakteristike: {
        napad: 83,
        odbrana: 100,
        brzina: 78,
        }
    }

let Totodile = {
    ime: 'Totodile',
    vrsta: 'vodeni, celjusni',
    sposobnosti: 'vodeni mlaz, ugriz',
    karakteristike: {
        napad: 65,
        odbrana: 64,
        brzina: 43,
        }
    }

let Charizard = {
    ime: 'Charizard',
    vrsta: 'vatreni, leteci',
    sposobnosti: 'plamen',
    karakteristike: {
        napad: 84,
        odbrana: 78,
        brzina: 100,
        }
    }

let pokemoni = [ Pikachu, Blastoise, Totodile, Charizard ]

const sposobnosti = (niz) => {
    let nizSposobnosti = []

    niz.forEach(e => {
        nizSposobnosti.push(e.sposobnosti)
    }) 

    return nizSposobnosti
}

const poBrzini = (niz) => {
    niz.sort((a, b) => {
        return a.karakteristike.brzina - b.karakteristike.brzina
    })

    return niz
}

const najjaci = (niz) => {
    niz.sort((a, b) => {
        return a.karakteristike.napad - b.karakteristike.napad
    })

    return niz.pop()
}