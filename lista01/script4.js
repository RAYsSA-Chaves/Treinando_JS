// 4 - números de 1 a N (aceitar somente númeos maiores que 0)
let n = prompt("Digite um número: ");

while (n <= 0) {
    n = prompt("Digite um número: ");
}

for (let i = 1; i <= n; i++) {
    console.log(i);
}