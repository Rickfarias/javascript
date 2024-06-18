let num = [5, 8, 3]
num.push(34)
num[3] = 12
num[4] = 24
num[5] = 52
num.sort()

console.log(num)
let pos = num.indexOf(52)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}