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

let Continuar = true

while(Continuar){
    let Pergunta = String(prompt("1 Ver Carros /// 2 Ver Carro por ID /// 3 Adicionar Carro /// 4 Atualizar Carro /// 5 Deletar Carro /// 5 Finalizar Programa"))
    switch(Pergunta){

        case "1":
        BuscarTodos()
        break;

        case "2":
        let id = Number(prompt("Qual o ID do Carro ?"))
        BuscarPorId(id)
        break;

        case "3":
        const Marca = String(prompt("Qual a Marca do Carro ?"))
        const Modelo = String(prompt("Qual o Modelo do Carro ?"))
        const Categoria = String(prompt("Qual a Categoria do Carro ?"))
        const Ano = Number(prompt("Qual o Ano do Carro ?"))
        const Km = Number(prompt("Qual o Km do Carro ?"))
        const Valor = Number(prompt("Qual o Valor do Carro ?"))
        Cadastrar({
            Marca,
            Modelo,
            Categoria,
            Ano,
            Km,
            Valor
        })
        break;

        case "4":
        const idCarro = Number(prompt("Qual o id do carro?"))
        const Marca2 = String(prompt("Qual a Marca do Carro ?"))
        const Modelo2 = String(prompt("Qual o Modelo do Carro ?"))
        const Categoria2 = String(prompt("Qual a Categoria do Carro ?"))
        const Ano2 = Number(prompt("Qual o Ano do Carro ?"))
        const Km2 = Number(prompt("Qual o Km do Carro ?"))
        const Valor2 = Number(prompt("Qual o Valor do Carro ?"))
            AlterarValor(idCarro, {
                Marca2,
                Modelo2,
                Categoria2,
                Ano2,
                Km2,
                Valor2
            })

        case "4":
        let idCarDelete = Number(prompt("Qual o ID do Carro ?"))
        Delete(idCarDelete)
        break;

        case "5":
        Continuar = false
        break;

        default:
        alert("Opção Inválida")
        break;
    }
}

function BuscarTodos() {
    let ListaCarros: string [] = []
     fetch ("https://apigenerator.dronahq.com/api/F8cmGeH_/Carros")
     .then((response) => response.json())
     .then((data) => {
         for (let index = 0; index < data.length; index++) {
             ListaCarros.push(data[index].Modelo)
         }
     });
     console.log(ListaCarros)
 }
 function BuscarPorId(id: number) {
    fetch (`https://apigenerator.dronahq.com/api/F8cmGeH_/Carros/${id}`)
    .then((response) => response.json())
    .then((data) => {
        if(data.id == id){
            const Marca = data.Marca
            const Modelo = data.Modelo
            const Ano = data.Ano
            const Valor = data.Valor

            const CarroPropriedades = {
                Marca: Marca,
                Modelo: Modelo,
                Ano: Ano,
                Valor: Valor,
            }
            console.log(CarroPropriedades)
        }
    });

}

 async function Cadastrar(data = {}) {
    const response = await fetch("https://apigenerator.dronahq.com/api/F8cmGeH_/Carros", {
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

async function AlterarValor(idCarro: number, data = {}) {
    const response = await fetch(`https://apigenerator.dronahq.com/api/F8cmGeH_/Carros/${idCarro}`, {
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

async function Delete(idCarDelete: number) {
    const response = await fetch(`https://apigenerator.dronahq.com/api/F8cmGeH_/Carros/${idCarDelete}`, {
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