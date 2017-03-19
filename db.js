var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getAllParents: getAllParents,
  getAllChildren: getAllChildren,
  getChildById: getChildById
}

function getAllParents (testDb) {
  var db = testDb || connection
  return db('parents').select()
}

function getAllChildren (testDb) {
  var db = testDb || connection
  return db('children').select()
}

function getChildById (id, testDb) {
  var db = testDb || connection
  return db('children').select('id')
}
