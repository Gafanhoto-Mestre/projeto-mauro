+function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var peri = window.document.getElementById('pr')
    var data =  new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} hs.`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#d1b384'
        peri.innerHTML = "Bom dia 🥱! Você está no período da manhã."
    } else if (hora >= 12 && hora <= 18){
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#8b7b3b'
        peri.innerHTML = "Boa tarde 😎! Você está no período da tarde."
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#1f2212c4'
        peri.innerHTML = "Boa noite 😴! Você está no período da noite."
    }
}
