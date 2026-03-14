let pessoa = require('./commons/pessoa')()
let soma = require('./commons/Soma')
let imposto = require('./commons/CalculoImposto')

let soma2 = require('./calculadora/Soma')
let subtracao = require('./calculadora/Subtracao')
let multiplicacao = require('./calculadora/Multiplicacao')
let divisao = require('./calculadora/Divisao')

// felix = pessoa;

// console.log(JSON.stringify(felix))
// console.log(soma(2, 3))
// console.log('Taxa do imposto: ' + imposto.taxa)
// console.log('Valor do imposto: ' + imposto.valor(10))
// console.log('Valor do produto com imposto: ' + imposto.adicionar(10))

console.log(`Soma: ${soma2(10, 5)}`)
console.log(`Subtração: ${subtracao(10, 5)}`)
console.log(`Multiplicação: ${multiplicacao(10, 5)}`)
console.log(`Divisão: ${divisao(10, 5)}`)