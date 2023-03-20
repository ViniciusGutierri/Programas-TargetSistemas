// Solicita ao usuário um número para verificar se ele pertence à sequência de Fibonacci
const numero = parseInt(prompt("Digite um número para verificar se ele pertence à sequência de Fibonacci: "));

// Inicializa as duas primeiras posições da sequência
let fibonacci = [0, 1];

// Calcula a sequência de Fibonacci até que o último número seja maior ou igual ao número informado pelo usuário
while (fibonacci[fibonacci.length - 1] < numero) {
  const proximoNumero = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(proximoNumero);
}

// Verifica se o número informado pertence à sequência de Fibonacci
if (fibonacci.includes(numero)) {
  console.log(`${numero} pertence à sequência de Fibonacci`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci`);
}
