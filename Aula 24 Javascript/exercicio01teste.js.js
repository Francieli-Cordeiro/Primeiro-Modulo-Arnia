
const io = require ('../io/io')

 

function idadeEmDias(anos, meses, dias){ /* a descrição da funçao que esta dentro do parentese e o parametro usado para receber a variavel da função 
( ele lê pela ordem do que esta dentro do parentese e não pelo nome */ 
   const diasPorAno = anos * 365
   const diasPorMes = meses * 30
   const resultado = diasPorAno + diasPorMes + dias
    
   return resultado
}

io.write('Escreva quantos anos você tem: ')
const anos = io.readInt()

io.write('Escreva quantos meses: ')
const meses = io.readInt()

io.write('Escreva a quantidade de dias: ')
const dias = io.readInt()

const resultadoFinal = idadeEmDias(anos, meses, dias)
io.write(`A idade total em dias é:${ resultadoFinal}`)

       