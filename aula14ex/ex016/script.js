function contar() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f =  Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1.')
            p = 1
        }

        if(i < f){
        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} > `
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res. innerHTML += `${c} > ` 
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}