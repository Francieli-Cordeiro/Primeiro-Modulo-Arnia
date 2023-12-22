/*Faça uma função que recebe a idade de um nadador por parâmetro e
retorna a categoria desse nadador de acordo com a tabela abaixo: */

const io = require ('../io/io')

function categariaIdadeNadador(idade){

    if( idade>=5 && idade <=7){return " infantil A" 

    } else if (idade>=8 && idade <=10){
        return " infantil B"

    } else if (idade>=11 && idade <=13){
        return " Juvenil A"
    }else if (idade>=14 && idade <=17){
        return " Juvenil B"
    }else if (idade>=18 ){
        return " Adulto"

    } else { return "não tem idade sufuciente"
    }
}

io.write(`escreva a idade`)
const idade = io.readInt()

const categoria = categariaIdadeNadador(idade)
io.write(`A categoria do nadador é: ${ categoria}`)


