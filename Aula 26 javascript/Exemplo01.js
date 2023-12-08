const io = require('../io/io')


function escrevaArnia () {
    io.write('Arnia')
}

escrevaArnia()

function escrevaTexto(texto) {
    io.write(texto)

}

escrevaTexto('Arnia Texto')
const textoExemplo= 'texto exemplo'
escrevaTexto(textoExemplo)
function soma(n1, n2) {
    const soma = n1 + n2
    return soma
}
const resultadoSoma= soma (10,30)
io.write(resultadoSoma)

function subtração(n1, n2) {
    return n1 - n2
}
    const resultadoSubtação = subtração(90-76)
    io.write(resultadoSubtação)
