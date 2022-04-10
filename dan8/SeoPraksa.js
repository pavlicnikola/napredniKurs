const body = document.body

const mojH1 = document.createElement('h1')
mojH1.innerText = 'SEO praksa'

const mojP = document.createElement('p')
mojP.innerHTML = 'Naziv Knjige, 10<sup>th</sup> izdanje'

const mojP2 = document.createElement('p')
mojP2.innerHTML = 'SEO (<i>Search Engine Optimization</i>) predstavlja marketinsku tehniku kojasa odnosi na optimizaciju sajta za pretrazivace. <b>Cilj SEO tehnika je da se sajt prikaze u rezultatima pretrage, sto blize vrhu.<b>'

const mojH2 = document.createElement('h2')
mojH2.innerText = 'Potrebe korisnika i ciljevi pretrazivaca'

const mojP3 = document.createElement('p')
mojP3.innerHTML = '<b>Korisnici zele da sto efikasnije pronadju informaciju koja ih zanima.</b> To znaci, da uz sto manje napora dodju do web sajta koji ih interesuje. Web pretrazivaci, omogucavaju da unosom jednog ili vise termina (kljucnih reci), korisnik dobije listu sajtova koji odgovaraju njegovom upitu.'

const mojP4 = document.createElement('p')
mojP4.innerText = 'Cilj web pretrazivaca je da na sto kvalitetniji nacin zadovolje potrebe korisnika, posto i sami zaradjuju od korisnickih pretraga direktno (prikazujuci reklame unutar svojih rezultata) ili indirektno (nudeci dodatne usluge).'

const mojP5 = document.createElement('p')
mojP5.innerText = 'Da bi korisnici bili zadovoljni, web pretrazivac pokusava da na najbolji nacin "pogodi" sta su zeleli. Algoritam vrsi procenu koji rezultati su najrelevantniji za datu pretragu i tako ih i poredja na stranici sa rezultatima. Odavno je poznato da su korisnici "lenji" - retko ko zeli da "istrazuje" kroz stranice i stranice rezultata. Znajuci to, Google i ostali pretrazivaci ulazu ogromne napore da na vrhu stranice prikazu najbolje rezultate.'

const drugiH2 = document.createElement('h2')
drugiH2.innerText = 'Ciljevi vlasnika sajta'

const mojP6 = document.createElement('p')
mojP6.innerHTML = '<i>Nije tajna da vlasnici sajtova zele posecenost.</i> Zelimo da korisnici dodju nas sajt iz razlicitih razloga - da saznaju za nasu ponudu, da bismo zaradili od reklamiranja, ili da bismo imali mogucnost prodaje naseg proizvoda ili usluge. U najvecem broju slucajeva, korisnici dolaze do sajtova koriscenjem web pretrazivaca. Samim tim zelimo da se nas sajt nadje u rezultatima pretrage.'

const mojP7 = document.createElement('p')
mojP7.innerText = `Posto je ponasanje korisnika opste poznato, vlasnici sajtova s pravom pocinju da
razmisljaju o tome kako da svoj sajt "doteraju" na vrh pretrage. Svaka aktivnost
koja vodi poboljsanju ranga sajta na stranici sa rezultatima, spada u SEO.`

const Hr = document.createElement('hr')

const treciH2 = document.createElement('h2')
treciH2.innerHTML = `Kontakt <sub>vazno<sub>`

const mojAddress = document.createElement('address')
mojAddress.innerHTML = `Nasa kompanija<br> Ime Ulica, br. 49<br> Beograd,<br> Serbia.`

body.style.backgroundColor = 'grey'
mojH1.style.textAlign = 'center'
mojP4.style.backgroundColor = 'white'

let niz = []
niz.push(mojH2, drugiH2, treciH2)
niz.forEach(element =>{
    element.style.color = 'pink'
})

body.append(mojH1, mojP, mojP2, mojH2, mojP3, mojP4, mojP5, drugiH2, mojP6, mojP7, Hr, treciH2, mojAddress)