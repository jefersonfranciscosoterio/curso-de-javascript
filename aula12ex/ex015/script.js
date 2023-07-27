function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if(fano.value.length == 0 || fano > ano){
    window.alert('[ERRO] verifique os dados e tente novamente!')
   }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
        gênero = 'Homem'
        if (idade >= 0 && idade < 10){
        img.setAttribute('src', 'homem-crianca.png')
        }else if (idade > 10 && idade < 60){
        img.setAttribute('src', 'homem-jovem.png')
        }else if (idade > 60)
        img.setAttribute('src', 'homem-idoso.png')
    }else if (fsex[1].checked){
        gênero = 'Mulher'
        if(idade >= 0 && idade < 10){
        img.setAttribute('src', 'mulher-crianca.png')
        }else if (idade > 10){
        img.setAttribute('src', 'mulher-jovem.png')
        }else if (idade > 60)
        img.setAttribute('src', 'mulher-idosa.png')
    
}

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}

}