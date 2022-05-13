// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura=prompt('digite a altura:')
  let largura=prompt('digite a largura')
  let area= altura*largura
  console.log(area)
  // implemente sua lógica aqui

}
calculaAreaRetangulo



// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual=prompt('qual o ano atual?')
  let anoNascimento =prompt('Qual seu ano de nascimento?')
  let idade =anoAtual-anoNascimento
  console.log(idade)
  // implemente sua lógica aqui

}
imprimeIdade

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  
  let pesoIMC=(60.5)
  let alturaIMC=(1.60)
  let imc=peso/(altura*altura)
  return imc
   // implemente sua lógica aqui
 
 }


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome =prompt('qual é o seu nome?')
  let idade =prompt('quantos anos você tem?')
  let email =prompt('qual é o seu email?')
  
  let frase =(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  console.log(frase)
  return imprimeInformacoesUsuario
}

imprimeInformacoesUsuario


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 =prompt('qual sua cor favorita?')
  let cor2 =prompt('segunda cor')
  let cor3 =prompt('terceira cor')
  const cores=[cor1,cor2,cor3]
  console.log(cores)
return imprimeTresCoresFavoritas
}
imprimeTresCoresFavoritas()


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  string=string.toUpperCase()
  return string 

}
console.log(retornaStringEmMaiuscula("oi"))

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  venda=custo/valorIngresso
  return venda

}
console.log(calculaIngressosEspetaculo(4000,100))


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  string1.lenght
  string2.lenght
  return string1,string2
  mesmoTamanho=string1===string2
  return mesmoTamanho
}
console.log(checaStringsMesmoTamanho("ola","abcd"))

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}