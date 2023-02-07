'Condição Aninhada - if else-if else'

console.log('Você Pode dirigir?')
var idade = 17
var habilitação = false
if(idade<18){
    console.log(`Você tem ${idade}  anos.`)
    console.log('Você é menor de idade e não pode tirar habilitação.')
    console.log('Você não pode dirigir.')
}else if(idade >= 18 && habilitação == true){
    console.log(`Você tem ${idade} anos.`)
    console.log('Você é maior de idade e está habilitado.')
    console.log('Você pode dirigir.')
}else if(idade >=18 && habilitação == false){
    console.log(`Você tem ${idade} anos.`)
    console.log('Você é maior de idade, mas não está habilitado')
    console.log('Você não pode dirigir.')
    console.log('Você pode tirar habiitação.')
}
