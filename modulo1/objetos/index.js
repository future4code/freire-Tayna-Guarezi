// exercicios de interpretação de código
//1-a) oque vai ser impreso no console?
//Matheus Nachtergaele
//Virginia Cavendish
//canal: "Globo", horario: "14h"
//2-a) O que vai ser impresso no console?
//{ nome: "Juca", idade: 3, raca: "SRD"}
//{nome: "Juba", idade: 3, raca: "SRD"}
//{nome: "Jubo", idade: 3, raca: "SRD"}
//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//adicionar propiedades dentro de objetos
//3-a) O que vai ser impresso no console?
//false,underfined
//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//porque, dentro do objeto não foi declarado nenhuma chave com esse valor
//exercicios de escrita de código
//1
const pessoa={
    nome:"Bianca",
    apelidos:["bia","bibi","bianquinha"]

}
function apelido(){
    return console.log(`Eu sou ${pessoa.nome} , mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}`)
}
apelido()

pessoa.apelidos=['bya','bibis','bi']
apelido()

//2
const objeto1 ={
    nome:'Maria',
    idade:30,
    profissao:"professora"
}
const objeto2={
    nome:"ana",
    idade:"25",
    profissao:'programadora'
}
function recebeObjetos(){
 let lista1=[objeto1.nome,
    objeto1.nome.length,
    objeto1.idade,
    objeto1.profissao,
    objeto1.profissao.length
    ]
    console.log(lista1)
}
recebeObjetos()

function recebeObjetos(){
    let lista2=[objeto2.nome,
    objeto2.nome.length,
objeto2.idade,
objeto2.profissao,
objeto2.profissao.length]

console.log(lista2)

}
recebeObjetos(objeto2)



//3


let carrinho=[]
let fruta1={nome:"banana",disponivel:true}
let fruta2={nome:'uva',disponibilidade:true}
let fruta3={nome:'melancia',disponibildade:true}

function fruta(){
    carrinho.push(fruta1)
    carrinho.push(fruta2)
    carrinho.push(fruta3)
    console.log(carrinho)
}
fruta()


