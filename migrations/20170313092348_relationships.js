exports.up = function (knex, Promise) {
  return knex.schema.createTable('relationships', function (table) {
    table.increments('id').primary()
    table.string('parents_id')
    table.string('children_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('relationships')
}
