exports.up = function (knex, Promise) {
  return knex.schema.createTable('stock', function (table) {
    table.increments('id')
    table.string('nappies')
    table.string('wipes')
    table.string('formula')
    table.string('children_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('stock')
}
