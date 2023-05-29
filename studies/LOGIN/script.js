function clicar() {
    var nome = document.getElementById("nome")
    var password = document.getElementById("senha")
    var answer = document.querySelector('div#resposta')
    answer.innerHTML = `Nome selecionado: <strong>${nome.value} </strong> <br> Senha selecionada: <strong>${password.value}</strong>`
}