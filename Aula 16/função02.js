//Criando a função parimpar.

function parimpar(n){
    //Criando a ação pra a função
    if(n % 2 == 0){
        return 'par.'
    }else{
        return 'ímpar.'
    } //A função tem dois retornos, mas apenas um retorna.
}

// Criando a chamada sem criar uma variável
console.log(parimpar(118)) //Mostra o resultado na tela