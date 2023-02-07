function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value > ano)){
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            gênero = 'homem';
            if(idade == 0 && idade <= 5){
                img.setAttribute('src', 'bebe-masc.jpg')
            }else if(idade < 12){
                img.setAttribute('src', 'Criança-garoto.jpg')
            }else if(idade < 21){
                img.setAttribute('src', 'jovem-masc.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'Adulto.jpg')
            }else{
                img.setAttribute('src', 'Idoso.jpg')
            }
        }else if(fsex[1].checked){
            gênero = 'mulher';
            if(idade == 0 && idade <= 5){
                img.setAttribute('src', 'bebe-fem.jpg')
            }else if(idade < 12){
                img.setAttribute('src', 'Criança-garota.jpg')
            }else if(idade < 21){
                img.setAttribute('src','jovem-fem.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'Adulta.jpg')
            }else{
                img.setAttribute('src', 'Idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML=`Dectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}