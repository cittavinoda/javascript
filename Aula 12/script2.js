function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var estação = 'Inverno'
    msg.innerHTML=`${estação}`
    if(estação == 'Verão'){
        img.src = 'fotoVerão.jpg'
        document.body.style.background='gold'
    }else if(estação == 'Outono'){
        img.src='fotoOutono.jpg'
        document.body.style.background='purple'
    }else if(estação == 'Primavera'){
        img.src='fotoPrimavera.jpg'
        document.body.style.background='red'
    }else if(estação == 'Inverno'){
        img.src='fotoInverno.jpg'
        document.body.style.background='grey'
    }
}