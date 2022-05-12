//Exercícios de interpretação de código
//1
/*let array
console.log('a. ', array)
Vai dar erro underfined */

/*array = null
console.log('b. ', array)
null */

/*array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
11 */

/*let i = 0
console.log('d. ', array[i])
3 */

//array[i+1] = 19
//console.log('e. ', array)
//3,19,5,6,7,8,9,10,11,12,13

//const valor = array[i+6]
//console.log('f. ', valor)


//2 SUBI NUM ONIBUS EM MIRROCOS 27

//Exercícios de escrita de código

const nome= prompt('qual o seu nome?')
const email= prompt("qual o seu email?")
console.log (`O email ${email} foi criado com sucesso.Seja bem vindo(a), ${nome}`) //1

let comidasFavoritas =["macarrão", "strogonoff", "lasanha", "coxinha", "pizza"]
console.log (comidasFavoritas)


console.log(`Essas são minhas comidas favoritas:
${comidasFavoritas[0]}
${comidasFavoritas[1]}
${comidasFavoritas[2]}
${comidasFavoritas[3]}
${comidasFavoritas[4]}`)



let suaComidaFavorita= prompt('qual sua comida favorita?')
comidasFavoritas[1]=suaComidaFavorita

console.log(comidasFavoritas)//2

let listaDeTarefas=[]

let tarefa1= prompt('qual a primeira tarefa?')
let tarefa2= prompt('qual a segunda tarefa?')
let tarefa3= prompt('qual a terceira tarefa?')

listaDeTarefas=[tarefa1, tarefa2, tarefa3]
console.log('Sua lista de tarefas é',listaDeTarefas)//3



tarefaCompleta= prompt('qual tarefa acabou? (0,1,2)')
let i = tarefaCompleta
listaDeTarefas.splice(i,1)
console.log(listaDeTarefas)


