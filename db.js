var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getParents: getParents,
  getChildren: getChildren,
  getChild: getChild
}

function getParents (testDb) {
  var db = testDb || connection
  return db('parents').select()
}

function getChildren (testDb) {
  var db = testDb || connection
  return db('children').select()
}

function getChild (id, testDb) {
  var db = testDb || connection
  return db('children').where('children.id', id)
}
