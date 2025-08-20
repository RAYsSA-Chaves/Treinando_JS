let sorteados = [];

// opções de letras
let letras = ["B", "I", "N", "G", "O"];

function sortear() {
    // Caso não tenha mais o que sortear
    if (sorteados.length >= 75) {
        document.getElementById("letraSorteada").innerText = "F";
        document.getElementById("numSorteado").innerText = "IM";
        return;
    }

    let letra, num
    // Sortear até pegar uma combinação nova
    do {
        let coluna = Math.floor(Math.random() * 5);
        switch (coluna) {
            case (0):
                letra = "B";
                num = Math.floor(Math.random() * 15) + 1;
                break;
            case (1):
                letra = "I";
                num = Math.floor(Math.random() * 15) + 16;
                break;
            case (2):
                letra = "N";
                num = Math.floor(Math.random() * 15) + 31;
                break;
            case (3):
                letra = "G";
                num = Math.floor(Math.random() * 15) + 46;
                break;
            case (4):
                letra = "O";
                num = Math.floor(Math.random() * 15) + 61;
                break;
        }
    } while (sorteados.includes(letra + num));

    // Guardar letra e número sorteados
    sorteados.push(letra + num)

    // Atualizar os elementos
    document.getElementById("letraSorteada").innerText = letra;
    document.getElementById("numSorteado").innerText = num;

    addTabela(letra, num);
}

// Adiicionar o número na célula correta da tabela
function addTabela(letra, num){ 
    let tabela = document.querySelector("table").tBodies[0];
    // Descobrir o index da coluna
    let colIndex = letras.indexOf(letra);

    // Caso haja conteúdo na célula, verificar a linha debaixo
    let celEncontrada = false;
    for (let i = 0; i < tabela.rows.length ;i++) {
        let celula = tabela.rows[i].cells[colIndex];

        if (celula.innerText === "") {
            celula.innerText = num;
            celEncontrada = true;
            break;
        }
    }

    // Se não achar célula vazia, criar nova linha
    if (!celEncontrada) {
        let novaLinha = tabela.insertRow();

        // Preencher a célula certa da nova linha
        for (let j = 0; j < 5; j++) {
            let novaCelula = novaLinha.insertCell();
            novaCelula.innerText = (j === colIndex) ? num : "";
        }
    }
}