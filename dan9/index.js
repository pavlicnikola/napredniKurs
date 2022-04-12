const body = document.body

const div = document.createElement('div')
div.className = 'vezba'

const nav = document.createElement('nav')

    const ul = document.createElement('ul')

        const li = document.createElement('li')

        const li2 = document.createElement('li')

        const li3 = document.createElement('li')

            const a = document.createElement('a')
            a.href = '#home'
            a.innerText = 'Home'

            const a2 = document.createElement('a')
            a2.href = '#contact'
            a2.innerText = 'Contact'

            const a3 = document.createElement('a')
            a3.href = '#about'
            a3.innerText = 'About'

const form = document.createElement('form')

    const p = document.createElement('p')
    p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, magni.'

    const label = document.createElement('label')
    label.for = 'cars'
    label.innerText = 'Choose a car:'

    const select = document.createElement('select')
    select.setAttribute('id', 'cars')
    select.name = 'cars'
    
        const optgroup = document.createElement('optgroup')
        optgroup.label = 'Sweedish cars'

            const opt = document.createElement('option')
            opt.value = 'volvo'
            opt.innerText = 'volvo'

            const opt2 = document.createElement('option')
            opt2.value = 'saab'
            opt2.innerText = 'saab'

        const optgroup2 = document.createElement('optgroup')
        optgroup2.label = 'American cars'
        
            const opt3 = document.createElement('option')
            opt3.value = 'dodge'
            opt3.innerText = 'dodge'

            const opt4 = document.createElement('option')
            opt4.value = 'chevrolet'
            opt4.innerText = 'chevrolet'

        const optgroup3 = document.createElement('optgroup')
        optgroup3.label = 'European cars'
        
            const opt5 = document.createElement('option')
            opt5.value = 'mercedes'
            opt5.innerText = 'mercedes'

            const opt6 = document.createElement('option')
            opt6.value = 'BMW'
            opt6.value = 'BMW'

    const inp = document.createElement('input')
    inp.type = 'text'
    inp.name = 'nesto'

    const inp2 = document.createElement('input')
    inp2.type = 'submit'
    inp2.name = 'submit'
    inp2.value = 'potvrdi'

body.append(div)
div.append(nav, form)
nav.append(ul)
ul.append(li, li2, li3)
li.append(a)
li2.append(a2)
li3.append(a3)
form.append(p, label, select, inp, inp2)
select.append(optgroup, optgroup2, optgroup3)
optgroup.append(opt, opt2)
optgroup2.append(opt3, opt4)
optgroup3.append(opt5, opt6)

// napomena : treba da radim po redosledu, prvo napravim element i sredim ga pa ga apendujem, tako je najprakticnije i najpravilnije, ovde sam appendovao na dnu sve.