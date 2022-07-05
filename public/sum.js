const sendBtn = document.getElementById('sendBtn')
const text = document.getElementById('inputValue')
const result = document.querySelector('.result')

sendBtn.addEventListener('click', function (e) {
  e.preventDefault()
  var str = text.value
  var xhr = new XMLHttpRequest()
  xhr.open('get', `/getData?number=${str}`, true)
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
  //number=10
  var data = str
  xhr.send(data)
  xhr.onload = function () {
    result.innerHTML = xhr.responseText
  }
  text.value = ' '
})
