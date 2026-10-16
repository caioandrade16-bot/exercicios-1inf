const prompt=require("prompt-sync")()

const nomeTurno = prompt("Digite seu turno: ")
const meta = Number(prompt("Digite a meta de produção: "))
const producaoInicial = Number(prompt("Digite a produção incial"))
const pecasPorCaixa = Number(prompt("Digite a quantidade de itens que cabem em uma caixa : "))

let producaoFinal = producaoInicial
let situacaoMeta = "Meta atingida"

while (producaoFinal < meta){
    producaoFinal++
    situacaoMeta = producaoFinal >= meta ? "Meta atingida" : "Meta não atingida"
}

 let caixasNecessarias = 0 
 let restante = producaoFinal

 do {
    restante -= pecasPorCaixa
    caixasNecessarias++
 } while(restante > 0)

const resumo =`Turno: ${nomeTurno}
meta: ${meta}
produção inicial: ${producaoInicial}
peças por caixas: ${pecasPorCaixa}
Caixas necessárias: ${caixasNecessarias}
Situação meta: ${situacaoMeta}`

console.log(resumo)











module.exports = {
    nomeTurno,
    meta,
    producaoInicial,
    pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
    situacaoMeta,
    resumo
}