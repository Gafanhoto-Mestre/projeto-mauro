
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var peri = window.document.getElementById('pr')
    var data =  new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    hora = 19
    msg.innerHTML = `Agora são ${hora}:${min} hs.`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.backgroundImage = 'linear-gradient(to top, #EDD5B8,#D0B27C)'
        peri.innerHTML = "Bom dia 🥱!</br>Você está no período da manhã."
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.backgroundImage = 'linear-gradient(to top,#D0B27C, #8b7b3b)'
        peri.innerHTML = "Boa tarde 😎!</br>Você está no período da tarde."
    } else {
        img.src = 'noite.png'
        document.body.style.backgroundImage = 'linear-gradient(to top, #C18B59, #18100cff 30%,black 40%)'
        peri.innerHTML = "Boa noite 😴!</br>Você está no período da noite."
    }
}
