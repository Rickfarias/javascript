
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementsByClassName('foto-m')[0]
    
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora <12) {
        // BOM DIA
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#F2C36B'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#BF9278'
    } else {
        // BOA NOITE
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#023059'
    }
}