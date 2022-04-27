const buttonPrikaz = document.querySelector('#prikaz')
const buttonPobednik = document.querySelector('#pobednik')
const divPokemoni = document.querySelector('#pokemoni')
const body = document.body
body.append(pokemoni)

buttonPrikaz.addEventListener('click', event => {
    const pokemon = document.createElement('div')
    pokemoni.append(pokemon)

    const opisPokemona = document.createElement('p')
    opisPokemona.innerHTML = `
        ime: Pikachu <br>
        vrsta: elektricni, mis <br>
        sposobnosti: staticni elektricitet <br>
        karakteristike: <br>
        napad: 55 <br>
        odbrana: 40 <br>
        brzina: 90
    `
    pokemon.append(opisPokemona)

    const slikaPokemona = document.createElement('img')
    slikaPokemona.src = './slike/Pikachu.png'
    pokemon.append(slikaPokemona)

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

    const pokemon2 = document.createElement('div')
    pokemoni.append(pokemon2)

    const opisPokemona2 = document.createElement('p')
    opisPokemona2.innerHTML = `
        ime: Blastoise <br>
        vrsta: vodeni, oklopni <br>
        sposobnosti: vodeni top <br>
        karakteristike: <br>
        napad: 83 <br>
        odbrana: 100 <br>
        brzina: 78
    `
    pokemon2.append(opisPokemona2)

    const slikaPokemona2 = document.createElement('img')
    slikaPokemona2.src = './slike/Blastoise.png'
    pokemon2.append(slikaPokemona2)

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

    const pokemon3 = document.createElement('div')
    pokemoni.append(pokemon3)

    const opisPokemona3 = document.createElement('p')
    opisPokemona3.innerHTML = `
        ime: Totodile <br>
        vrsta: vodeni, celjusni <br>
        sposobnosti: vodeni mlaz, ugriz <br>
        karakteristike: <br>
        napad: 65 <br>
        odbrana: 64 <br>
        brzina: 43
    `
    pokemon3.append(opisPokemona3)

    const slikaPokemona3 = document.createElement('img')
    slikaPokemona3.src = './slike/Totodile.png'
    pokemon3.append(slikaPokemona3)

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

    const pokemon4 = document.createElement('div')
    pokemoni.append(pokemon4)

    const opisPokemona4 = document.createElement('p')
    opisPokemona4.innerHTML = `
        ime: Charizard <br>
        vrsta: vatreni, leteci <br>
        sposobnosti: plamen <br>
        karakteristike: <br>
        napad: 84 <br>
        odbrana: 78 <br>
        brzina: 100
    `
    pokemon4.append(opisPokemona4)

    const slikaPokemona4 = document.createElement('img')
    slikaPokemona4.src = './slike/Charizard.png'
    pokemon4.append(slikaPokemona4)
})

buttonPobednik.addEventListener('click', event => {
    const pokemon4 = document.createElement('div')
    pokemoni.append(pokemon4)

    const opisPokemona4 = document.createElement('p')
    opisPokemona4.innerHTML = 'ime: Charizard, najjaci pokemon'
    pokemon4.append(opisPokemona4)

    const slikaPokemona4 = document.createElement('img')
    slikaPokemona4.src = './slike/Charizard.png'
    pokemon4.append(slikaPokemona4)
})