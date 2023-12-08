/* Escreva um algoritmo para ler o número total de eleitores de um
município, o número de votos brancos, nulos e válidos. Calcular e escrever
o percentual que cada um representa em relação ao total de eleitores.*/

const io = require('../io/io')

let eleitoresMunicipio
let votosemBranco
let votosNulos 
let votosValidos

io.write("eleitoresMunicipio:")
eleitoresMunicipio = io.readInt()

io.write("votosemBranco:")
votosemBranco = io.readInt()

io.write("votosNulos:")
votosNulos = io.readInt()

io.write("votosValidos:")
votosValidos = io.readInt()

votosemBranco = votosemBranco / eleitoresMunicipio * 100
io.write(`A porcentagem de votos em Branco ${votosemBranco}%`)

votosNulos = votosNulos / eleitoresMunicipio * 100
io.write(`A porcentagem de votos nulos ${votosNulos}%`)

votosValidos = votosValidos / eleitoresMunicipio * 100
io.write(`A porcentagem de votos validos ${votosValidos}%`)

