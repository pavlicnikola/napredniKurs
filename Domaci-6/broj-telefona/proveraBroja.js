const inpTelNum = document.querySelector('#telnum')
const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    if(inpTelNum.value.trim().length >= 9 && inpTelNum.value.trim().length <= 10 && isNaN(inpTelNum.value.trim()) != true) {
        alert('pravilno ste uneli telefonski broj')
    } else {
        alert('nepravilno unet telefonski broj')
    }

    setTimeout(() => {
        inpTelNum.value = ''
    }, 2000)
})