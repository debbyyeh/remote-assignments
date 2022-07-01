const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Assignment 1: Your First Web Server
app.get('/', (req, res) => {
  res.send('Hello, My Server!')
})

// Assignment 2: Build Backend API for Front-End

var webRequest = (req, res, next) => {
  let number = req.query.number
  let _url = req._url
  if (_url == '/getData') {
    next()
  } else if (_url !== '/getData' && number > 0) {
    let total = 0
    for (let i = 0; i <= number; i++) {
      total += i
    }
    res.send(`You get ${total}`)
  } else {
    res.send('Wrong Parameter')
  }
}

app.get('/getData', webRequest, (req, res) => {
  res.send('Lack of Parameter')
})

//pug
app.set('view engine', 'pug')
//增加靜態檔案,public資料夾
app.use(express.static('./public'))
app.get('/', (req, res) => {
  res.render('sum.html')
})
//傳送資料到後端
app.post('/getData', (req, res) => {
  console.log(req.body.number)
  //轉址
  res.redirect('/public/sum.html')
})

//增加body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var port = process.env.PORT || 3000
app.listen(port)
