const prompt = require('prompt-sync')();

let numero = prompt('Digite um número com mais que 2 digitos para formar o maior número possivel seus algoritmos: ');

const digitos = numero.toString().split(''); //converter um número para uma string em um array

for (let i = 0; i < digitos.length; i++){
    for (let j = i +  1; j < digitos.length; j++){
        if (digitos[i] < digitos[j]){
           let temp = digitos[i];
           digitos[i] = digitos [j]
           digitos[j]= temp;
        }
    }
   
}
 



const numeroMax = digitos.join('')//transforma o array em uma string
console.log(numeroMax)

