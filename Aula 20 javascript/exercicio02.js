const io = require('./io/io')
let x = 1
let acc = 0
while (x <= 20) {
    io.write(`Escreva o ${x} numero`)
    acc += io.readInt()
    x++
}
const res = acc / 20
io.write(`A média aritmetica dos numeros informados é: ${res}`)