const io = require('./io/io')

let x = 0

while (x < 98) {
    x += 2
    io.write(x)
}
