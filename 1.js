var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, categoria, ano, quilometragem, valor) {
        this.Marca = marca;
        this.Modelo = modelo;
        this.Categoria = categoria;
        this.Ano = ano;
        this.Quilometragem = quilometragem;
        this.Valor = valor;
    }
    return Carro;
}());
var Continuar = true;
while (Continuar) {
    var Pergunta = String(prompt("1 Ver Carros /// 2 Ver Carro por ID /// 3 Adicionar Carro /// 4 Atualizar Carro /// 5 Deletar Carro /// 5 Finalizar Programa"));
    switch (Pergunta) {
        case "1":
            BuscarTodos();
            break;
        case "2":
            var id = Number(prompt("Qual o ID do Carro ?"));
            BuscarPorId(id);
            break;
        case "3":
            var Marca = String(prompt("Qual a Marca do Carro ?"));
            var Modelo = String(prompt("Qual o Modelo do Carro ?"));
            var Categoria = String(prompt("Qual a Categoria do Carro ?"));
            var Ano = Number(prompt("Qual o Ano do Carro ?"));
            var Km = Number(prompt("Qual o Km do Carro ?"));
            var Valor = Number(prompt("Qual o Valor do Carro ?"));
            Cadastrar({
                Marca: Marca,
                Modelo: Modelo,
                Categoria: Categoria,
                Ano: Ano,
                Km: Km,
                Valor: Valor
            });
            break;
        case "4":
            var idCarro = Number(prompt("Qual o id do carro?"));
            var Marca2 = String(prompt("Qual a Marca do Carro ?"));
            var Modelo2 = String(prompt("Qual o Modelo do Carro ?"));
            var Categoria2 = String(prompt("Qual a Categoria do Carro ?"));
            var Ano2 = Number(prompt("Qual o Ano do Carro ?"));
            var Km2 = Number(prompt("Qual o Km do Carro ?"));
            var Valor2 = Number(prompt("Qual o Valor do Carro ?"));
            AlterarValor(idCarro, {
                Marca2: Marca2,
                Modelo2: Modelo2,
                Categoria2: Categoria2,
                Ano2: Ano2,
                Km2: Km2,
                Valor2: Valor2
            });
        case "4":
            var idCarDelete = Number(prompt("Qual o ID do Carro ?"));
            Delete(idCarDelete);
            break;
        case "5":
            Continuar = false;
            break;
        default:
            alert("Opção Inválida");
            break;
    }
}
function BuscarTodos() {
    var ListaCarros = [];
    fetch("https://apigenerator.dronahq.com/api/F8cmGeH_/Carros")
        .then(function (response) { return response.json(); })
        .then(function (data) {
        for (var index = 0; index < data.length; index++) {
            ListaCarros.push(data[index].Modelo);
        }
    });
    console.log(ListaCarros);
}
function BuscarPorId(id) {
    fetch("https://apigenerator.dronahq.com/api/F8cmGeH_/Carros/".concat(id))
        .then(function (response) { return response.json(); })
        .then(function (data) {
        if (data.id == id) {
            var Marca = data.Marca;
            var Modelo = data.Modelo;
            var Ano = data.Ano;
            var Valor = data.Valor;
            var CarroPropriedades = {
                Marca: Marca,
                Modelo: Modelo,
                Ano: Ano,
                Valor: Valor
            };
            console.log(CarroPropriedades);
        }
    });
}
function Cadastrar(data) {
    if (data === void 0) { data = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://apigenerator.dronahq.com/api/F8cmGeH_/Carros", {
                        method: 'POST',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        redirect: 'follow',
                        referrerPolicy: 'no-referrer',
                        body: JSON.stringify(data)
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
function AlterarValor(idCarro, data) {
    if (data === void 0) { data = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://apigenerator.dronahq.com/api/F8cmGeH_/Carros/".concat(idCarro), {
                        method: 'PUT',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        redirect: 'follow',
                        referrerPolicy: 'no-referrer',
                        body: JSON.stringify(data)
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
function Delete(idCarDelete) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://apigenerator.dronahq.com/api/F8cmGeH_/Carros/".concat(idCarDelete), {
                        method: 'DELETE',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        redirect: 'follow',
                        referrerPolicy: 'no-referrer'
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
