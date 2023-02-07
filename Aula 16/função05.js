//Resolvendo o problema de apenas um valor ser declarado no parâmetro.

function soma(n3=0, n4=0){
    return n3 + n4
}

console.log(soma (5))

//O JavaScript lança o parâmetro 5 no n3 e soma com o valor do n4, zero. Então 5 + 0 = 5