// zadatak : napravi u konzoli figuru dijamanta za n = 5, N neka bude u sredini i za n = 1 treba samo N da se pojavi

//     *
//    ***
//   *****
//  *******
// *** N ***
//  *******
//   *****
//    ***
//     *

let n = 5
let str = ''

for(let i = 0; i < n - 1; i++) {
    str = ''
    for(let j = 1; j <= n; j++) {
        if(j < n - i) {
            str += ' '
        } else if (j == n) {
            str += '*'
        } else {
            str += '**'
        }
    }
        console.log(str);
}

for (let i = 1; i <= 1; i++) {
    str = ''
    if(n % 2 != 0) {
        for(let j = 1; j <= n; j++) {
            if(j == Math.ceil(n/2)) {
                str += 'N'
            } else if(j == Math.ceil(n/2 - 1)) {
                str += '* '
            } else if(j == Math.ceil(n/2 + 1)) {
                str += ' *'
            } else {
                str += '**'
            }
        }
    } else {
        for(let j = 1; j <= n - 1; j++) {
            if(j == n/2) {
                str += ' N '
            } else {
                str += '**'
            }
        }
    }
        console.log(str);
}

for(let i = n - 2; i >= 0; i--) {
    str = ''
    for(let j = 1; j <= n; j++) {
        if(j < n - i) {
            str += ' '
        } else if (j == n) {
            str += '*'
        } else {
            str += '**'
        }
    }
        console.log(str);
}