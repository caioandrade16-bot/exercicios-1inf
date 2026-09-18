// RF01 — Registro do pedido
const cliente = "Lucas Almeida"
const produto = "Notebook Gamer"
const preco = 4500
const quantidade = 2
const estoque = 10
const valorPago = 9000

// RF02 — Cálculo do subtotal
const subtotal = preco * quantidade

// RF03 — Verificação do estoque
const estoqueDisponivel = quantidade <= estoque

// RF04 — Aplicação de desconto
const descontoPercentual = subtotal >= 1000 ? 10 : 0
const valorDesconto = subtotal * (descontoPercentual / 100)

// RF05 — Cálculo do valor final
const valorFinal = subtotal - valorDesconto

// RF06 — Verificação do pagamento
const pagamentoStatus =
    valorPago >= valorFinal
        ? "Pagamento aprovado"        
        : "Pagamento insuficiente"

// RF07 — Cálculo do troco
const troco = valorPago >= valorFinal
    ? valorPago - valorFinal
    : 0


const statusPedido = estoqueDisponivel
    ? "Pedido disponível para finalização"
    : "Pedido não pode ser finalizado por falta de estoque"

const resumo = `
Cliente: ${cliente}
Produto: ${produto}
Preço: R$ ${preco.toFixed(2)}
Quantidade: ${quantidade}
Subtotal: R$ ${subtotal.toFixed(2)}
Desconto: ${descontoPercentual}%
Valor do desconto: R$ ${valorDesconto}
Valor final: R$ ${valorFinal}
Situação do estoque: ${estoqueDisponivel}
Valor pago: R$ ${valorPago}
Situação do pagamento: ${pagamentoStatus}
Troco: R$ ${troco}
Situação do pedido: ${statusPedido}
`

module.exports = {
    cliente,
    produto,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    descontoPercentual,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusPedido,
    resumo
}
