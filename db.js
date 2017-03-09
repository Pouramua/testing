var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getUsers: getUsers,
  getAllParents: getAllParents,
  getAllChildren: getAllChildren
  // getUser: getUser
}

function getUsers (testDb) {
  var db = testDb || connection
  return db('users').select()
}

function getAllParents (testDb) {
  var db = testDb || connection
  return db('parents').select()
}

function getAllChildren (testDb) {
  var db = testDb || connection
  return db('children').select()
}

// function getUser (id, testDb) {
//   var db = testDb || connection
//   return db('users').where('id', id)
// }
