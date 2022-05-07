const inputUsername = document.querySelector('#username')
const button = document.querySelector('#dugme')

let korisnici = [
    {
        username:'Nikola10',
        password:'Nikola11'
    },

    {
        username:'MarkoGamer',
        password:'0123456789'
    },

    {
        username:'Djole',
        password:'Djole_05'
    },

    {
        username: 'ucenik',
        password: 'ucenik9'
    }
]

inputUsername.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        let postoji = false
    
        korisnici.forEach( korisnik => {
            if(inputUsername.value.trim() === korisnik.username) {
                postoji = true
            }
        })
    
        if(postoji) {
            inputUsername.style.borderColor = '#f00'
        } else {
            inputUsername.style.borderColor = '#0f0'
        }
    } else {
        console.log(event.key);
    }
})