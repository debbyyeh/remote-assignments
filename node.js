const http = require('http')
const express = require('express')
const app = express()
//enter http://localhost:3000/
// http
//   .createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' })
//     response.write('Hello, My Server!')
//     response.end()
//   })
//   .listen(3000)

// app.use((req, res, next) => {
//   console.log('someone is coming')
//   next()
// })
// Assignment 1: Your First Web Server
app.get('/', (req, res) => {
  res.send('Hello, My Server!')
})

// Assignment 2: Build Backend API for Front-End
app.get('/getData', (req, res) => {
  let number = req.query.number
  let _url = req.url
  let total = 0
  let n = number
  if (_url == '/getData' && number === 'xyz') {
    res.send('Wrong Parameter')
  } else if (_url == '/getData' && number > 0) {
    for (let i = 0; i <= number; i++) {
      total += i
    }
    res.send(`You get ${total}`)
  } else {
    res.send('Lack of Parameter')
  }
})

//pug
app.set('view engine', 'pug')
//增加靜態檔案,public資料夾
app.use(express.static('./public'))
app.get('/', (req, res) => {
  res.render('sum.html')
})

let port = process.env.PORT || 3000
app.listen(port)
