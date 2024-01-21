const urlCidade = 'http://dataservice.accuweather.com/locations/v1/search'
const urlClima = 'http://dataservice.accuweather.com/currentconditions/v1/'

const apiKey = 'ix9wdpdKGXuKWDEbJtHUGcOPZ2l10EJn'


const formulario = document.querySelector("#formulario");

    const buscarCidade = async () => {
        const local = document.getElementById('nome').Value
        console.log(local)

        try {
            const consultarCidade = await fecth ( `${urlCidade}?=${local}&apikay=${apiKey}`)
            const cidade = await consultarCidade.json()

            const consultarClima = await fecth ( `${urlClima}?=${cidade[0].kay}&apikay=${apiKey}`)
            const clima = await consultarClima.json()
        
                document.getElementById('local').innerHTML = cidade[0].LocalizedName
                document.getElementById('condicao').innerHTML = clima[0].WeatherText
                document.getElementById('temperatura').innerHTML = clima[0].Temperature.Metric.Value + '°C'
                document.getElementById('data').innerHTML = new Date(clima[0].LocalObservationDateTime).toLocaleDateString

                document.getElementById('caixa').style.display = 'block'
    

                
    } catch (erro){
        console.log(erro)
    }}




