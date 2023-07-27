function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var dia = ('Bom Dia')
    var tarde = ('Boa Tarde')
    var noite = ('Boa Noite')
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
         msg.innerHTML = `${dia}! Agora são ${hora} horas e ${minutos} minutos.`
        img.src = 'manhã.png'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora <= 18){
        msg.innerHTML = `${tarde}! Agora são ${hora} horas e ${minutos} minutos.`
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    }else {
        msg.innerHTML = `${noite}! Agora são ${hora} horas e ${minutos} minutos.` 
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }

}
