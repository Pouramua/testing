var path = require('path')
var bodyParser = require('body-parser')
var express = require('express')
var hbs = require('express-handlebars')

var index = require('routes/index')

var server = express()

module.exports = server

server.use(express.static('styles'))

// Middleware

server.set('view options', { layouts: true})
server.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main'}))
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))
server.use(bodyParser.urlencoded({ extended: true }))

// Routes

server.get('/', index.getHome)
server.get('/about', index.getAbout)
server.get('/contact', index.getContact)
