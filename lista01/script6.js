// 6 - tabuada de um valor (aceitar somente valor entre 1  e 10)
let num = prompt("Digite um número: ");
let resultado = 0;

while (num > 10 || num < 1) {
    num = prompt("Digite um número: ");
}

for (let i = 1; i <= 10; i++) {
    resultado = i * num;
    console.log(i + " X " + num + " = " + resultado);
}