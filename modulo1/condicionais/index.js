// Exercicios de interpretação de texto
//1-a) O código pega um número e se ele for divisivel por dois ele volta a mensagem que 'passou no teste',se não for vai a segunda opção 'não passou no teste'
//b)Numéros pares
//c)Números impares
//2-a) Serve para mostrar o valor da fruta escolhida
//b)2.25
//c)5
//3-a) É uma constante que pergunta um número atravéz do prompt e converte a resposta que sempre vem como string em Number
//b) se ele digitar 10 aparece 'esse número passou no testo' se ele digitar -10 da erro
//c)vai dar erro porque falta uma segunda condição de if caso o resultado de falso ou um else
//Exercicios de escrita de código

//1
const idadeDoUsuario = prompt("Qual a sua idade?")
const numero = Number(idadeDoUsuario)
if (idadeDoUsuario >=18){
    console.log('você pode dirigir')
}else{
    console.log('você não pode dirigir')
}

// //2
const turnoDoAluno =prompt('Em qual turno você estuda? (M)matutino, (V)vespertino ou (N)notruno').toUpperCase()

if(turnoDoAluno ==='M'){
    console.log('Bom dia!')
}else if(turnoDoAluno ==='V'){
    console.log('Boa tarde!')

}else{
    console.log('Boa noite!')
}
// //3
switch(turnoDoAluno){
    case 'M':
        console.log('Bom dia !')
        break
    case 'V':
        console.log('Boa tarde!')
        break
    case 'N':
        console.log('Boa noite!')
        break
       default:
console.log('digite um turno válido')
break

 }
//4
const genero =prompt('Qual o gênero do filme?').toLowerCase()
const valor=prompt('Qual o valor do ingresso?')
const valorNovo = Number(valor)


if(genero==='fantasia' && valor <= 15){
    console.log(`Bom filme `)
}
else{
    console.log('escolha outro filme')
}

//desafio 1
const genero =prompt('Qual o gênero do filme?').toLowerCase()
const valor=prompt('Qual o valor do ingresso?')
const numero = Number(valor)
const lanchinho=prompt('Qual lanche você vai comer?')

if(genero==='fantasia' && valor <= 15){
    console.log(`Bom filme e aproveite o seu ${lanchinho}`)
}
else{
    console.log('escolha outro filme')
}