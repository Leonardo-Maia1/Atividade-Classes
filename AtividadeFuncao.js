let nivelHeroi = "Indefinido"
let resultado = calcularPartidas (54, 30)

function calcularPartidas (vitorias, derrotas) { 
	let saldoVitorias = vitorias - derrotas;

  if (vitorias < 10){
      nivelHeroi = "Ferro"
      
  } else if (vitorias >= 11 && vitorias <= 20) {
      nivelHeroi = "Bronze"

  } else if (vitorias >= 21 && vitorias <= 50) {
      nivelHeroi = "Prata"

  } else if (vitorias >= 51 && vitorias <= 80) {
      nivelHeroi = "Ouro"

  } else if (vitorias >= 81 && vitorias <= 90) {
      nivelHeroi = "Diamante"

  } else if (vitorias >= 91 && vitorias <= 100) {
      nivelHeroi = "Lendário"

  } else if (vitorias >= 101) {
      nivelHeroi = "Imortal"
  }

  return {nivelHeroi, saldoVitorias}

}

console.log ("O herói tem saldo de "+ resultado.saldoVitorias + " e está no nível de " + resultado.nivelHeroi)