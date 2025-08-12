// 8 - média aritmética de 10 valores
let soma = 0;
let media = 0;
for (let i = 1; i <= 10; i++) {
    let num = Number(prompt("Digite o " + i + "° número: "));
    soma += num;
}

media = soma/10;

console.log("Média: " + media)