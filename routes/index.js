var express = require('express')

var db = require('../db')

module.exports = {
  getHome: getHome,
  getForm: getForm,
  getAbout: getAbout,
  getContact: getContact,
  getParents: getParents,
  getChildren: getChildren,
  getChildById: getChildById
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

function getChildById (req, res) {
  res.send('Child Details')
  // var id = req.params.id
  // db.getChildById()
  //   .where('id', id)
  //   .then(function (child) {
  //   res.render('child', id)
  //   })
  //   .catch(function (err) {
  //     res.status(500).send('DATABASE ERROR: ' + err.message)
  //   })
}
