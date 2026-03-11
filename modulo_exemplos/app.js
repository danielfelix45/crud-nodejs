let pessoa = require('./commons/pessoa')()
let soma = require('./commons/Soma')
let imposto = require('./commons/CalculoImposto')

felix = pessoa;

// console.log(JSON.stringify(felix))
// console.log(soma(2, 3))
console.log('Valor do produto com imposto: ' + imposto.adicionar(10))
console.log('Valor do imposto: ' + imposto.valor(10))
console.log('Taxa do imposto: ' + imposto.taxa)