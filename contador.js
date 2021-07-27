function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length ==0 || passo.value.length == 0) {
        window.alert('[ERRO] Preencha todos os campos para calcular')
        res.innerHTML = 'Impossivel contar'
        
    }else{ 
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0 ) {
            window.alert('Passo não pode ser zero. considerando o valor 1 para contagem')
            p=1
        }
        
        if(i<=f){
        for (var c = i; c <= f ; c+= p) {
            res.innerHTML +=` \u{1F449} ${c} `
            }
        }else{
        for (var c = i; c >= f; c-= p) {
            res.innerHTML += ` \u{1F449} ${c} `
        }

        }
        res.innerHTML += `\u{1F3F4}`
}
    
}