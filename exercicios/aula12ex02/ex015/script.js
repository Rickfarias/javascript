function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 6) {
                // Criança 1
                img.setAttribute('src', 'criança0-5-editada.jpg')
            } else if (idade < 13) {
                // Criança 2
                img.setAttribute('src', 'criança5-12-editada.jpg')
            } else if (idade < 25) {
                // Jovem
                img.setAttribute('src', 'homem-jovem-editada.jpg')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'homem-meia-idade-editada.jpg')
            } else {
               // Idoso
               img.setAttribute('src', 'homem-idoso-editada.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 6) {
                // Criança 1
                img.setAttribute('src', 'criança0-5-editada.jpg')
            } else if (idade < 13) {
                // Criança 2
                img.setAttribute('src', 'criança5-12-editada.jpg')
            } else if (idade < 25) {
                // Jovem
                img.setAttribute('src', 'mulher-jovem-editada.jpg')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'mulher-meia-idade-editada.jpg')
            } else {
               // Idoso
               img.setAttribute('src', 'mulher-idosa-editada.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}