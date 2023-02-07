'Declarando um vetor de nome num.'

let num = [5,8,2,9,3]
console.log('Valores do vetor num.')
console.log(num)

'Acrescentando um novo elemento com um valor já atribuído ao vetor num.'

num.push(1)
console.log('Novo valor do vetor num.')
console.log(num)

'Achando o valor de uma determinada posição do vetor num.'

let pos = num.indexOf(9)
console.log(`O valor 9 está na posição ${pos}`)