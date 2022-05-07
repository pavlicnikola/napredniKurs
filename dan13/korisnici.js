const body = document.body

const divIspisKorisnika = document.createElement('div')
divIspisKorisnika.classList.add('container')
body.appendChild(divIspisKorisnika)

const divHead = document.createElement('div')
divHead.classList.add('korisnik')
divIspisKorisnika.appendChild(divHead)

let korisnici = [
    {
        ime:'Marko',
        prezime:'Markovic',
        godine:30,
        zanimanje:'elektricar',
        plata:70000
    },

    {
        ime:'Marta',
        prezime:'Jovanovic',
        godine:25,
        zanimanje:'bibliotekarka',
        plata:50000
    },

    {
        ime:'Milos',
        prezime:'Jovicic',
        godine:27,
        zanimanje:'programer',
        plata:170000
    },

    {
        ime:'Milan',
        prezime:'Jovic',
        godine:40,
        zanimanje:'hirurg',
        plata:150000
    }
]

const renderBase = () => {
    const pIme = document.createElement('p')
    pIme.textContent = 'IME'
    
    const pPrezime = document.createElement('p')
    pPrezime.textContent = 'PREZIME'
    
    const pGodine = document.createElement('p')
    pGodine.textContent = 'GODINE'
    
    const pZanimanje = document.createElement('p')
    pZanimanje.textContent = 'ZANIMANJE'
    
    const pPlata = document.createElement('p')
    pPlata.textContent = 'PLATA'
    
    divHead.append (
        pIme,
        pPrezime,
        pGodine,
        pZanimanje,
        pPlata
    )
}

const renderUser = () => {
    korisnici.forEach(korisnik => {
        const divKorisnik = document.createElement('div')
        divKorisnik.classList.add('korisnik')
    
        const pIme = document.createElement('p')
        pIme.textContent = korisnik.ime
    
        const pPrezime = document.createElement('p')
        pPrezime.textContent = korisnik.prezime
    
        const pGodine = document.createElement('p')
        pGodine.textContent = korisnik.godine
    
        const pZanimanje = document.createElement('p')
        pZanimanje.textContent = korisnik.zanimanje
    
        const pPlata = document.createElement('p')
        pPlata.textContent = korisnik.plata
    
        const buttonBrisiKorisnika = document.createElement('button')
        buttonBrisiKorisnika.textContent = 'Obrisi'

        buttonBrisiKorisnika.addEventListener('click', () => {
            // divKorisnik.classList.add('hide')
            korisnici.splice(korisnici.indexOf(korisnik), 1)
            divIspisKorisnika.textContent = ''
            renderBase()
            renderUser()
        })
    
        divKorisnik.append (
            pIme,
            pPrezime,
            pGodine,
            pZanimanje,
            pPlata,
            buttonBrisiKorisnika
        )
    
        divIspisKorisnika.appendChild(divKorisnik)
    })
}
    renderBase()
    renderUser()


