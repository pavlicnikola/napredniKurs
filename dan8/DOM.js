// Document oobject model

const body = document.body
const p = document.getElementById('paragraf')
const div = document.getElementsByClassName('mojDiv')
const pSvi = document.getElementsByTagName('div')
            // ili
const mojH1 = document.querySelector('h1')
// const mojDiv = document.querySelectorAll('h1')

mojH1.id = 'noviID'
// div.className

// mojH1.textContent = 'Novi naslov'
// mojH1.innerText = '<i>Novi naslov</i>'
mojH1.innerHTML = '<i>Novi naslov</i>'

mojH1.style.backgroundColor = '#000'
mojH1.style.color = '#fff'

const mojP = document.createElement('p')
mojP.innerText = 'lorem ipsum dolor sit'
body.appendChild(mojP)
// body.append(mojP, element2, element3 ...)

console.log(mojH1)