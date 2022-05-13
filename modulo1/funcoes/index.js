//Exercícios de interpretação de código
//1- a) vai ser impresso no console 10,50
//b) se tirar o console.log vai dar erro 

//2-a) a função pega um texto deixa tudo em letras minusculas e apartir desse texto ela verefica se tem a palavra escolhida no caso cenoura, se na frase que for escrita tiver a palavra ela retorna true, se não tiver ela retorna false
//b) todas as frases vão retornar true, em todas tem a palavra incluida

//Exercícios de escrita de código
//1 a
function informacoes(){
    console.log('Eu sou a tayna, tenho 22 anos, moro em Rio Grande da Serra-sp, e sou estudante da Labenu ')
}

informacoes()//1 a

//1 b
function informacoesPessoais(){

    let nome=prompt('Qual é o seu nome')
    let idade=prompt('Quantos anos você tem?')
    let idadeNumero= Number(idade)
    let cidade=prompt('Mm qual cidade você mora?')
    let profissao=prompt('Qual a sua profissão?')
   
    
   console.log('eu sou',nome,'tenho',idade,'anos. moro em', cidade, 'e sou',profissao)
   
   return informacoesPessoais
}
informacoesPessoais() //1 b



//2 a
function soma(a,b){
    let soma=a+b
    console.log(soma)
    return soma
}
soma(2,5) //2 a

//2 b
function booleano(a,b){ 
let booleano=a>=b
console.log(booleano)
return booleano
}
booleano(7,4) //2 b

//2 c
function numeroPar(a){
let numeroPar=a % 2  === 0
console.log(numeroPar)
return numeroPar
}
numeroPar(5) //c

//incompleto