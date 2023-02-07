function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML=`Agora são ${hora} horas.<br/>`

    if(hora > 0 && hora < 12){
        img.src='fotomanha.png'
        msg.innerHTML+='Bom dia!'
        document.body.style.background='#f5d1a8'
    }else if(hora >= 12 && hora <= 18){
        img.src='fototarde.png'
        msg.innerHTML='Boa Tarde!'
        document.body.style.background='#ba7569'
    }else{
        img.src='fotonoite'
        msg.innerHTML='Boa Noite!'
        document.body.style.background='#284a5e'
    }
}
