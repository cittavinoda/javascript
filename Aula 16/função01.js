//Criando a função parimpar.

function parimpar(n){
    //Criando a ação pra a função
    if(n % 2 == 0){
        return 'par.'
    }else{
        return 'ímpar.'
    } //A função tem dois retornos, mas apenas um retorna.
}

let res = parimpar(10) //Chamada
console.log(res) //Mostra o resultado na tela