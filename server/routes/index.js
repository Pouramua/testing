var express = require('express')
var knex = require('knex')

module.exports = {
  getHome: getHome,
  getAbout: getAbout,
  getContact: getContact
}

function getHome (req, res) {
  res.render('home')
}

function getAbout (req, res) {
  res.render('about')
}

function getContact (req, res) {
  res.render('contact')
}
