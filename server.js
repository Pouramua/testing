var path = require('path')
var bodyParser = require('body-parser')
var express = require('express')
var hbs = require('express-handlebars')

var index = require('./routes/index')

var server = express()

module.exports = server

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))
server.use(bodyParser.urlencoded({ extended: true }))

// Routes

server.get('/home', index.getHome)
server.get('/form', index.getForm)
server.get('/parents', index.getParents)
server.get('/children', index.getChildren)
server.get('/child/:id', index.getChildById)

// server.engine('handlebars', exphbs({defaultLayout: 'main.hbs'}));
// server.set('view engine', 'handlebars');
// server.set('views', path.join(__dirname, 'views'))
// server.use(bodyParser.urlencoded({ extended: true }))
