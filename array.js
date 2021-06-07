const precos = ['Credito', '200 KZ', '400 KZ', 'Contas a pagar', '300 KZ', '400 KZ'];


const precosFiltro = precos.filter((preco) => preco.includes('KZ'))

const precos= numeros =precosFiltro.map((preco)=> preco.replace('KZ', ''))