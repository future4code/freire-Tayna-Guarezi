// Exercicio de interpretação de código
// 1
// a- False
// b- False
// c- Erro 
// d- Erro

//2 Será impresso os números um do lado do outro o computador não vai indentificar que é uma soma, fica como uma string ele tem que indetificar que é uma soma

//solução
/*let primeiroNumero = prompt("Digite um numero!")
const  primeiroNumero1 = Number(primeiroNumero)

let segundoNumero = prompt("Digite outro numero!")
const segundoNumero2 = Number(segundoNumero)

const soma = primeiroNumero1 + segundoNumero2

console.log(soma) */

//exercicios de escrita de código
//1
let suaidade = prompt("Qual a sua idade?")
const suaIdade1 = Number(suaidade)

let IdadeAmigo = prompt("QUal a idade do seu(a) melhor amigo(a)??")
const idadeamigo1 =Number(IdadeAmigo)

console.log ("sua idade é maior que a do seu melhotr amigo?",suaIdade1>idadeamigo1) 

//2
let numeroPar = prompt("digite um numero par")
let restoDaDivisao = numeroPar % 2 

console.log (restoDaDivisao)
 //Quando divide por um número par sempre resta 0, e quando divide por um número impar o resto é zero

//3
 let idadeEmAnos =prompt("Qual sua idade?")

let idademeses = idadeEmAnos*12
console.log ("sua idade em meses é", idademeses)

let idadeDias = idadeEmAnos * 365
console.log ("sua idade em dias é", idadeDias)

let idadeHoras = (365*24)*idadeEmAnos
console.log ("sua idade em hora é", idadeHoras)

/*O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações.*/

//4
const num1 =prompt("escreva um número")
const num2 =prompt("escreva outro número")

console.log (num1 > num2)
console.log (num1 === num2)
//Imcompleto








