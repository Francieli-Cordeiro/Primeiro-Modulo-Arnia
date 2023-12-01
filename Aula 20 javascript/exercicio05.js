const io = require('./io/io')

io.write('Escreva um numero')
let x = 1
let n = io.readInt()


while (x <= n) {
     if (x % 2 == 1) {
         io.write(`${x} - ímpar`);
  } else {
    io.write(`${x} - par`);
     }
    x++;
}
