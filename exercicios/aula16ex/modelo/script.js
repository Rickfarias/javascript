function adicionar() {
    let num = document.getElementById('numero')
    let adc = document.getElementById('seltab')

    if (num.value.length < 1  || num.value.length > 100) {
        alert('[ERRO] Adicione um número entre 1 e 100')
    } else {
        let n = Number(num.value)

        for(let c = n; c <= 100; c++)
        let item = document.createElement('option')
        item.text = `${n}`
    }
}