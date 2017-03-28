
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stock').del()
    .then(function () {
      // Inserts seed entries
      return knex('stock').insert([
        {id: 1, nappies: '20+', wipes: '2pks', formula: 'half a tin', children_id: 88801},
        {id: 2, nappies: '10-', wipes: '1pk', formula: 'full tin', children_id: 88802},
        {id: 3, nappies: '20+', wipes: '2pks', formula: 'full tin', children_id: 88804},
        {id: 4, nappies: '10+', wipes: 'LOW', formula: 'half a tin', children_id: 88806},
        {id: 5, nappies: '10-', wipes: '2pks', formula: 'half a tin', children_id: 88807},
        {id: 6, nappies: '20+', wipes: '2pks', formula: 'two tins', children_id: 88809},
        {id: 7, nappies: '10-', wipes: 'LOW', formula: 'half a tin', children_id: 88810},
        {id: 8, nappies: '10+', wipes: '1pk', formula: 'two tins', children_id: 88811},
        {id: 9, nappies: '20+', wipes: '2pks', formula: 'two tins', children_id: 88813}
      ])
    })
}
