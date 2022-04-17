const inputImeMusterije = document.querySelector('#ime')
const inputBrojStola = document.querySelector('#sto')
const inputRacun = document.querySelector('#racun')
const buttonUnosMusterija = document.querySelector('#unos')
const buttonIspisMusterija = document.querySelector('#ispis')
const divIspisMusterija = document.querySelector('#ispisMusterija')

let nizMusterija = []

buttonUnosMusterija.addEventListener('click', e => {
    let musterija = {
        ime: inputImeMusterije.value,
        brojStola: parseInt(inputBrojStola.value),
        racun: parseInt(inputRacun.value)
    }

    nizMusterija.push(musterija)

    setTimeout(() => {
        inputImeMusterije.value = ''
        inputBrojStola.value = ''
        inputRacun.value = ''
    }, 1000)
})

buttonIspisMusterija.addEventListener('click', e => {
    divIspisMusterija.textContent = ''

    if(nizMusterija.length != 0) {
        nizMusterija.forEach(element => {
            const divMusterija = document.createElement('div')
            const pImeMusterija = document.createElement('p')
            const pBrojStola = document.createElement('p')
            const pRacun = document.createElement('p')
    
            pImeMusterija.textContent = 'Ime musterije: ' + element.ime
            pBrojStola.textContent = 'Broj stola: ' + element.brojStola
            pRacun.textContent = 'Racun: ' + element.racun
    
            divMusterija.append(pImeMusterija, pBrojStola, pRacun)
            divIspisMusterija.append(divMusterija)
        })
    } else {
        console.log('Nema musterija');
    }
})