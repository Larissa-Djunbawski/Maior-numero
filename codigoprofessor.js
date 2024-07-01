const prompt = require ("prompt-sync")()

while(true) {//funciona  enquanto for verdadeiro

    if (NaN){
        console.log("Numero invalido")
    } else {
        let numero = prompt("Digite um número: ")

        numero = numero.split("") //separa em uma string vazia, o valor entre parentezes determina o tamanho do array
        
        for (let i = 0; i < numero.length; i++){
            for (j = i + 1;  j < numero.length; j++){
                if (numero[i] < numero[j]){
                    let  aux = numero[i]
                    numero[i] = numero[j]
                    numero[j] = aux
        
                }
            }
        }
        console.log(numero.join(""))
        
            
        }
    }
