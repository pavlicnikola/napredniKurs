const inputName = document.querySelector('#name')
const inputSurname = document.querySelector('#lastName')
const inputBirthDate = document.querySelector('#date')
const inputPhoneNumber = document.querySelector('#phone')
const inputUsername = document.querySelector('#username')
const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#pass')
const forma = document.querySelector('form')

let nizKorisnika = []

forma.addEventListener('submit', event => {
    event.preventDefault()

    let korisnik = {
        Ime: inputName.value,
        Prezime: inputSurname.value,
        DatumRodjenja: inputBirthDate.value,
        Telefon: inputPhoneNumber.value,
        Username: inputUsername.value,
        Email: inputEmail.value,
        Password: inputPassword.value
    }

    nizKorisnika.push(korisnik)
    console.log(korisnik);
})