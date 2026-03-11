let taxa = 0.10

// Aqui uma função para exportar valores.
exports.valor = function(a) {
    return a * taxa
}

// Aqui uma função de adicionar.
exports.adicionar = function(a) {
    return a + (a * taxa)
}