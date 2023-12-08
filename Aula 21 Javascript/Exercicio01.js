/* Faça um programa de computador para calcular o quanto gastou um
fumante com seu vício. O usuário deverá informar o número de anos que
fuma, o número de cigarros por dia e o preço do maço de cigarro.
Considere o maço com 20 unidades (considere o ano com 365 dias)*/



const io = require('../io/io')
let anos
let cigarrosDia
let precoMaco
let dias = 0
let precoUnitario
let gastoTotal

io.write("Digite a quantidade de anos")
anos = io.readInt()
io.write("Quantidade de cigarros por dia")
cigarrosDia = io.readInt()
io.write("Digite o preço do maço")
precoMaco = io.readFloat()

dias = anos * 365
precoUnitario = precoMaco / 20

gastoTotal = cigarrosDia * dias * precoUnitario

io.write(`O gasto total foi: ${gastoTotal}`)