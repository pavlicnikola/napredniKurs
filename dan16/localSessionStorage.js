let niz = [1, 2, 3, 4, 5]
let noviNiz = []
let sessionNiz = []

if(localStorage.getItem('brojevi') == null)
    localStorage.setItem('brojevi', JSON.stringify(niz))
else
    noviNiz = JSON.parse(localStorage.getItem('brojevi'))

if(localStorage.getItem('brojevi') != null)
    localStorage.removeItem('brojevi')

// localStorage.clear()

sessionStorage.setItem('brojevi', JSON.stringify(niz))
sessionNiz = JSON.parse(sessionStorage.getItem('brojevi'))

console.log(sessionNiz);