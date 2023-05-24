var data = new Date()
var hora_atual = data.getHours()

var time_placeholder = document.getElementById('placeholder_time')

time_placeholder.innerHTML = `Agora são ${hora_atual} horas`
