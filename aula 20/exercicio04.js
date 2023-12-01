const io = require('./io/io')

let x = 0 

io.write('Escreva um numero')
let n = io.readInt()

while (x < n ) {
   io.write(x +=5) 
}