'Declarando um vetor de nome num.'

let num = [5,8,2,9,3]
console.log('Valores do vetor num.')
console.log(num)
console.log()
'Acrescentando um novo elemento com um valor já atribuído ao vetor num.'

num.push(1)
console.log('Novo valor do vetor num.')
console.log(num)

'Organizando os valores por ordem numérica.'
console.log()
num.sort()
console.log(num)
console.log()
'Achando o valor de uma determinada posição do vetor num.'

let pos = num.indexOf(9)
console.log(`O valor 9 está na posição ${pos}`)