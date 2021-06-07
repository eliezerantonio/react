fetch('http://livrowebservices.com.br/rest/carros').then((response) => response.json()).then(json => {
    
    console.log(json);
})

async function fetchCarros(url) {
    const response = await fetch(url);
    
    return response;
}

const carros = fetchCarros('http://livrowebservices.com.br/rest/carros')

console.log(carros);