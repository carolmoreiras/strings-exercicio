/*# Exercício 1

Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
    ```
    Estas são as comidas favoritas de nomeDoUsuario
    - Comida1
    - Comida2
    - Comida3
*/

const nomeDoUsuario = prompt("Qual é o seu nome?")
const comida1 = prompt("Qual sua comida favorita?")
const comida2 = prompt("Qual sua comida favorita?")
const comida3 = prompt("Qual sua comida favorita?")

console.log("Estas são as comidas favoritas de", nomeDoUsuario + ":",`\n`
+"-", comida1,`\n`
+"-", comida2,`\n`
+"-", comida3)