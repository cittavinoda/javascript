'Hora do Dia'

var hora = 13
console.log(`São exatamente ${hora} horas`)
if(hora > 0 && hora < 5){
    console.log('Boa madrugada!')
}else if(hora < 12){
    console.log('Bom dia!')
}else if(hora <=18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}