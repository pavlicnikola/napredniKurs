// const body = document.body
// const divTime = document.createElement('div')
// divTime.id = 'time'
// body.append(divTime)

let sati = new Date().getHours()
// console.log(sati);

let minuti = new Date().getMinutes()
// console.log(minuti);

let sekunde = new Date().getSeconds()
// console.log(sekunde);

let vreme = `${sati}:${minuti}:${sekunde}`
// console.log(vreme);

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

const body = document.body
const buttonPoruka = document.querySelector('#poruka')
const buttonBrisanje = document.querySelector('#brisanje')
const newParagraph = document.createElement('p')
body.appendChild(newParagraph)

buttonPoruka.addEventListener('click', (event) => {
    newParagraph.innerText = 'Pozdrav iz listener-a'
})

buttonBrisanje.addEventListener('click', (event) => {
    newParagraph.innerText = ''
})