var express = require('express')
var knex = require('knex')

var db = require('../db')

module.exports = {
  getHome: getHome,
  getAbout: getAbout,
  getContact: getContact,
  getForm: getForm,
  getParents: getParents,
  getChildren: getChildren,
  getChild: getChild
}

function getHome (req, res) {
  res.render('home')
}

function getAbout(req, res) {
  res.render('about')
}

function getContact(req, res) {
  res.render('contact')
}

function getForm(req, res) {
  res.render('form')
}

function getParents (req, res) {
  db.getParents()
    .then(function (parents) {
      res.render('parents', { parents: parents })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function getChildren (req, res) {
  db.getChildren()
    .then(function (children) {
      res.render('children', { children: children })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function getChild (req, res) {
  var id = req.params.id

  db.getChild(id)
    .join('stock', 'children.id', '=', 'stock.children_id')
    .select()
    .then(function (child) {
    res.render('child', {children: child})
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}
