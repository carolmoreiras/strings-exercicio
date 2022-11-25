//Crie a const para a frase aqui

//a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

const frase = ('Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"')

//b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

const fraseNova = frase.replace("verde","rosa").replaceAll("azul","laranja")
console.log(fraseNova)

//c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

console.log(fraseNova.includes("verde")) //imprime false
console.log(fraseNova.includes("laranja")) // imprime true

//**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”

console.log(fraseNova.replace(
    'mas não deixe o gato sair',
    'mas não deixe o gato sair'.toUpperCase()
)) 