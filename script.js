function calcular() {
    var txtn1 = document.getElementById('txtn1')
    var txtn2 = document.getElementById('txtn2')
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    var operador = document.getElementById('operador').value
    var res = document.getElementById('res')

    if(operador == '+'){
        var s = n1 + n2
        res.innerText = 'O resultado é ' + s
    }
    if(operador == '-'){
        s = n1 - n2
        res.innerText = 'O resultado é ' + s
    }
    if(operador == '*'){
        s = n1 * n2
        res.innerText = 'O resultado é ' + s
    }
    if(operador == '/'){
        s = n1 / n2
        res.innerText = 'O resultado é ' + s
    }
}