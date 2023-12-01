const io = require('./io/io')

let x = 0

io.write('Digite um numero natural')
let n = io.readInt()
io.write('Digite a frase que você deseja ')
let frase = io.read()

while (x < n) {
    io.write(frase)
    x++
}

