let taxa = 0.10

// Aqui uma função para exportar valores, que é o valor do imposto.
exports.valor = function(a) {
    return a * taxa
}

// Aqui uma função para exportar o valor do produto com o imposto incluso.
exports.adicionar = function(a) {
    return a + (a * taxa)
}