// 1
function isFibonacci(num) {
    let a = 0, b = 1;
    while (a < num) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return a === num;
}

// Exemplo de uso:
let num = 21;  // ou você pode substituir por qualquer número
console.log(`O número ${num} ${isFibonacci(num) ? 'pertence' : 'não pertence'} à sequência de Fibonacci.`);



// 2
function countLetterA(str) {
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (char === 'a') {
            count++;
        }
    }
    return count;
}

// Exemplo de uso:
let str = "JavaScript é uma linguagem poderosa!";
console.log(`A letra 'a' aparece ${countLetterA(str)} vez(es) na string.`);


// 3
function calcularSoma() {
    let INDICE = 12, SOMA = 0, K = 1;
    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }
    return SOMA;
}

// Exemplo de uso:
console.log(`O valor final de SOMA é: ${calcularSoma()}`);


//4
  // a
function proximoElementoA() {
    return 7 + 2;
}

// Exemplo de uso:
console.log(`Próximo número na sequência (a): ${proximoElementoA()}`);

  // b

function proximoElementoB() {
    return 64 * 2;
}

// Exemplo de uso:
console.log(`Próximo número na sequência (b): ${proximoElementoB()}`);

 // c
 function proximoElementoC() {
    let n = 7;
    return n * n;
}

// Exemplo de uso:
console.log(`Próximo número na sequência (c): ${proximoElementoC()}`);

 // d
function proximoElementoD() {
    let n = 10;
    return n * n;
}

// Exemplo de uso:
console.log(`Próximo número na sequência (d): ${proximoElementoD()}`);

// e
 function proximoElementoE() {
    let a = 5, b = 8;
    return a + b;
}

// Exemplo de uso:
console.log(`Próximo número na sequência (e): ${proximoElementoE()}`);

//f
 function proximoElementoF() {
    return 20;
}

// Exemplo de uso:
console.log(`Próximo número na sequência (f): ${proximoElementoF()}`);

//5
function descobrirInterruptores() {
    /*
    - Ligue o primeiro interruptor por alguns minutos e depois desligue.
    - Ligue o segundo interruptor e vá para a sala das lâmpadas:
        - A lâmpada acesa pertence ao segundo interruptor.
        - A lâmpada quente e apagada pertence ao primeiro interruptor.
        - A lâmpada fria e apagada pertence ao terceiro interruptor.
    */
    return "Estratégia: Ligue o 1º interruptor, espere e desligue. Ligue o 2º e vá até a sala.";
}

// Exemplo de uso:
console.log(descobrirInterruptores());
























