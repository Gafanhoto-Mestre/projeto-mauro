function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var peri = window.document.getElementById('pr')
    var data =  new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `${hora}:${min} hs.`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = 'linear-gradient(to top,#f4d96cff,#d1b384)'
        peri.innerHTML = "Bom dia 🥱!</br>Você está no período da manhã."
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = 'linear-gradient(to top,#000000ff, #f4d96cff)'
        peri.innerHTML = "Boa tarde 😎!</br>Você está no período da tarde."
    } else {
        img.src = 'noite.png'
        document.body.style.background = 'linear-gradient(to top, #C18B59,#000000ff)'
        peri.innerHTML = "Boa noite 😴!</br>Você está no período da noite."
    }
}
