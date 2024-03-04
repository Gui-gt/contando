function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert(`[ERROR]`)
        res.innerHTML = `impossivel contar!`
    }else{
        res.innerHTML = `Preparando contagem: <br>`
        var i = Number(txti.value)
        var f = Number(txtf.value)
        var p = Number(txtp.value)
        if(p < 0){
            alert(`Passo invalido, considerando passo 1!`)
            p = 1
        }else if(i < f){
            for(var c = i;c <= f;c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else if(i > f){
            for(var c = i;c >= f;c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }res.innerHTML += `\u{1F3C1}`
    }
}