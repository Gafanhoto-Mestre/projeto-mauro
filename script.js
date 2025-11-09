function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data =  new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var hora = 22
    msg.innerHTML = `Agora são ${hora}:${min} hs.`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#d1b384'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#8b7b3b'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#1f2212c4'
    }
}