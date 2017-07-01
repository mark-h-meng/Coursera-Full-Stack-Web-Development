var express = require('express')
var morgan = require('morgan')

var hostname = 'localhost'
var port = 3000

var app = express()

app.use(morgan('dev'))

// The line below is to allow the static webpage
app.use(express.static(__dirname + '/public'));

var dishRouter = require('./dishRouter')
var promoRouter = require('./promoRouter')
var leaderRouter = require('./leaderRouter')

app.use('/dishes', dishRouter)
app.use('/promotions', promoRouter)
app.use('/leadership', leaderRouter)

app.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`)
})

module.exports = app

