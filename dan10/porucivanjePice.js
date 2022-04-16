let sati = new Date().getHours()
let minuti = new Date().getMinutes()
let sekunde = new Date().getSeconds()
let vreme = `${sati}:${minuti}:${sekunde}`

const generateTime = () => {
    const divTime = document.querySelector('#time')
    divTime.style.textAlign = 'right'

    let sati = new Date().getHours()
    let minuti = new Date().getMinutes()
    let sekunde = new Date().getSeconds()
    let vreme = ''
    let noon = false

    if (sati > 12) {
        sati = sati - 12
        noon = true
    }

    if (sati < 10) {
        sati = '0' + sati
    }

    if (minuti < 10) {
        minuti = '0' + minuti
    }

    if (sekunde < 10) {
        sekunde = '0' + sekunde
    }

    if (noon) {
        vreme = `${sati}:${minuti}:${sekunde} PM`
    } else {
        vreme = `${sati}:${minuti}:${sekunde} AM`
    }
    divTime.textContent = vreme

    return setTimeout(() => {
        generateTime()
    }, 1000)
}

generateTime()

const buttonBroj = document.querySelector('#broj')
const pica = document.querySelector ('#pica')
let brojacPica = 0

buttonBroj.addEventListener('click', (event) => {
    pica.innerHTML = 'Trenutni broj pica: ' + ++brojacPica
})

const buttonPoruci = document.querySelector('#naruci')
const poruka = document.querySelector('#poruka')
const divTime = document.querySelector('#time')

buttonPoruci.addEventListener('click', (event) => {
    vreme = divTime.innerText

    poruka.innerText = `poruceno je ${brojacPica} pica u ${vreme}, narudzbina stize za 30 minuta`

    setTimeout(() => {
        poruka.textContent = ''
    }, 2000)

    pica.innerText = 'Trenutni broj pica : 0'
    brojacPica = 0
})