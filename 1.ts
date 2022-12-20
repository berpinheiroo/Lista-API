class Carro{
    Marca: string
    Modelo: string
    Categoria: string
    Ano: number
    Quilometragem: number
    Valor: number


    constructor(marca: string, modelo: string, categoria: string, ano: number, quilometragem: number, valor: number){
        this.Marca = marca
        this.Modelo = modelo
        this.Categoria = categoria
        this.Ano = ano
        this.Quilometragem = quilometragem
        this.Valor = valor

    }
}

let novoCarro = new Carro("Honda", "City", "passeio", 2022, 20000, 50000)

// Cadastrar(novoCarro)
// .then((data) => {
// console.log(data);
// });

// BuscarTodos()
// BuscarPorId(3)

// AlterarValor(3, novoCarro)
// .then((data) => {
// console.log(data);
// });

// Delete(2)

function BuscarTodos(id: number) {
     fetch ("https://apigenerator.dronahq.com/api/wPX4uKnz/Carros")
    .then((response) => response.json())
    .then((data) => console.log(data)); 
 }
 function BuscarPorId(id: number) {
    fetch (`https://apigenerator.dronahq.com/api/wPX4uKnz/Carros/${id}`)
   .then((response) => response.json())
   .then((data) => console.log(data)); 
}

 async function Cadastrar(data = {}) {
    const response = await fetch("https://apigenerator.dronahq.com/api/wPX4uKnz/Carros", {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
    'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
    });
    return response.json();
}

async function AlterarValor(id: number, data = {}) {
    const response = await fetch(`https://apigenerator.dronahq.com/api/wPX4uKnz/Carros/${id}`, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
    'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
    });
    return response.json();
}

async function Delete(id: number) {
    const response = await fetch(`https://apigenerator.dronahq.com/api/NhvgcmA_/Carros/${id}`, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
    'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    
    });
    return response.json();
}