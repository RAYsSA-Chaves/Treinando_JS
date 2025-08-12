// 7 - ler 10 valores, informar quantos estão dentro do intervalo [10,20] e quantos estão fora
let qtdDentro = 0;
let qtdFora = 0;

for (let i = 1; i <= 10; i++) {
    let num = prompt("Digite o " + i + "° número: ")
    if (num >= 10 && num <= 20) {
        qtdDentro++;
    }
    else {
        qtdFora++;
    }
}

console.log("Números dentro do intervalo [10,20]: " + qtdDentro);
console.log("Números fora do intervalo: " + qtdFora);