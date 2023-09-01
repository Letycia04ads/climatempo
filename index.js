// URL da API que você deseja acessar
function buscarClima() {
    var cidade = document.getElementById('cidade').value;

    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cidade + '&appid=7143209bef7ed85b126ede594d6501ed'
    // Fazer uma solicitação GET à API usando fetch()
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('verifique o nome da cidade e tente novamente');
            }
            const retorno = response.json(); // Converte a resposta em JSON  
            return retorno;

        })


        .then(data => {
            // Aqui você pode manipular os dados recebidos da API
            console.log(data.main.temp);
            //passando o valor do objeto onde o main contem os valores da temperatura
            var temp = data.main.temp;
            temp = temp - 273; //convertendo para celcius
            temp = temp.toFixed(1); // deixando com 2 casas decimais
            document.getElementById('disabledText').value = temp + 'ºC';

            var tempo = data.weather[0].main;
            console.log(tempo);


            var temp2 = data.main. feels_like;
            temp2 = temp2 - 273;
            temp2 = temp2.toFixed(0); 
            document.getElementById("sensacao").value="A sensação térmica é de "+temp2+" °c";



            var max = data.main.temp_max;
            max = max - 273;
            max = max.toFixed(0);
            document.getElementById("max").value = max + "°c max";

            var min = data.main.temp_min;
            min = min - 273;
            min = min.toFixed(0);
            document.getElementById("min").value = min + "°c min"


            if (tempo == "Rain") {
                const imageElement = document.getElementById('imagem');
                imageElement.src = 'chuva.png';
            }
            else if (tempo == "Clouds") {
                const imageElement = document.getElementById('imagem');
                imageElement.src = 'nuvem.png';
            }
            
    
            else if (tempo == "Clear") {
                const imageElement = document.getElementById('imagem');
                imageElement.src = 'sol.png';
            }



        })

        .catch(error => {
            alert(error);
        });
}
