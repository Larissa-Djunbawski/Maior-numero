const prompt = require('prompt-sync')();

let numero = prompt('Digite um número com mais que 2 digitos para formar o maior número possivel seus algoritmos: ');

const digitos = numero.toString().split(''); //converter um número para uma string em um array

for (let i = 0; i < digitos.length; i++){ //ordena os digitos em ordem crescente troca os digitos comparados de posição
    for (let j = i +  1; j < digitos.length; j++){ //a variavel j sempre se iniciará após o  i
        if (digitos[i] < digitos[j]){//verifica se o digito na posição  i é menor que a posição j
           let temp = digitos[i]; //armazena temporariamente i em temp
           digitos[i] = digitos [j] //atribui o valor de i para j
           digitos[j]= temp;  //agora o valor de tempo armazenará em j
        }
    }
   
}
 



const numeroMax = digitos.join('')//transforma o array em uma string
console.log(numeroMax)

