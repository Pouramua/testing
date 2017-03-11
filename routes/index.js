var express = require('express')

var db = require('../db')

module.exports = {
  get: get,
  getHome: getHome,
  getParents: getParents,
  getChildren: getChildren
}

function get (req, res) {
  db.getUsers()
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function getHome (req, res) {
  res.send('Welcome to the homepage')
}

function getParents (req, res) {
  db.getAllParents()
    .then(function (parents) {
      res.render('parents', { parents: parents })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function getChildren (req, res) {
  db.getAllChildren()
    .then(function (children) {
      res.render('children', { children: children })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}
