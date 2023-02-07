'Decalrando um vetor num.'

let num = [5, 8, 2, 9, 3]
console.log(num)
console.log()
'Quantidades de posições do vetor.'

console.log(`O vetor tem ${num.length} posições.`)
console.log()
'Valor inexistente  no vetor.'

let pos = num.indexOf(7)

if(pos == -1){
    console.log('O valor 7 não foi encontrado.')
}else{
    console.log(`O valor 7 está na posição ${pos}`)
}

