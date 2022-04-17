const inputBroj1 = document.querySelector('#number1')
const inputBroj2 = document.querySelector('#number2')
const inputBroj3 = document.querySelector('#number3')
const inputResenje = document.querySelector('#resenje')
const buttonResenje = document.querySelector('#brojMAX')

buttonResenje.addEventListener('click', e => {
    let broj1 = parseInt(inputBroj1.value)
    let broj2 = parseInt(inputBroj2.value)
    let broj3 = parseInt(inputBroj3.value)
    let max = broj1

    if(broj2 > max) {
        max = broj2
    }

    if(broj3 > max) {
        max = broj3
    }

    inputResenje.value = max

    setTimeout(() => {
        inputBroj1.value = ''
        inputBroj2.value = ''
        inputBroj3.value = ''
        inputResenje.value = ''
    }, 3000)
})

// let niz = [1, 10, 200, 24, 300, 80, 98, 12, 103, 2005, 244, 3003, 807, 989]
// let max = niz[0]
// niz.forEach(e => {
//     if(e > max) {
//         max = e
//     }
// })