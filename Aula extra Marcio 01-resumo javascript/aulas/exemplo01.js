const io = require('../io/io')

io.write("qual seu time")

let n = io.read()
if (n == "Inter"){
    io.write("Voce é um Genio")
    io.write("melhor time")
}
else{
    io.write("muda de time")
}

io.write("Obrigada")