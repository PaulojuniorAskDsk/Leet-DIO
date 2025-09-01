
function calcularRankeadas(vitorias, derrotas) {

    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

let jogadores = [
    { vitorias: 8, derrotas: 5 },
    { vitorias: 15, derrotas: 5 },
    { vitorias: 35, derrotas: 20 },
    { vitorias: 70, derrotas: 25 },
    { vitorias: 85, derrotas: 40 },
    { vitorias: 95, derrotas: 30 },
    { vitorias: 150, derrotas: 45 }
];

for (let i = 0; i < jogadores.length; i++) {
    console.log(calcularRankeadas(jogadores[i].vitorias, jogadores[i].derrotas));
}
