const inputUsername = document.querySelector('#userName')
const inputPassword = document.querySelector('#password')
const forma = document.querySelector('form')

let nizKorisnika = [
    {
        user: 'admin',
        pass: 'admin',
        isAdmin: true
    },

    {
        user: 'user_1',
        pass: 'pass_1',
        isAdmin: false
    },

    {
        user: 'player',
        pass: 'gaming',
        isAdmin: false
    }
]

forma.addEventListener('submit', event => {
    event.preventDefault()
    let user = false
    let pass = false
    let admin = false

    if(inputUsername.value.trim() !== ''){
        nizKorisnika.forEach(korisnik => {
            if(inputUsername.value.trim() === korisnik.user) {
                if(korisnik.pass === inputPassword.value.trim()) {
                    user = true
                    pass = true
                    if(korisnik.isAdmin) {
                        admin = true
                        alert('pozdrav admine!')
                    }
                } else {
                    user = true
                }
            } else {
                pass = true
            }
        })
    } else {
        alert('Niste uneli podatke u username polje!')
    }

    if((user == true && pass == false) || (user == false && pass == true)) {
        alert('Proverite da li ste dobro uneli user i pass')
    }

    if(user == true && pass == true && admin == false) {
        alert('pozdrav korisnice!')
    }

})