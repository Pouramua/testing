exports.seed = function (knex, Promise) {
  return knex('children').del()
    .then(function () {
      return Promise.all([
        knex('children').insert({id: 88801, name: 'Noema Kupenga', age: 1}),
        knex('children').insert({id: 88802, name: 'Ripeka Kahaki', age: 2}),
        knex('children').insert({id: 88803, name: 'Heni Reedy', age: 3}),
        knex('children').insert({id: 88804, name: 'Mahara Kupenga', age: 1}),
        knex('children').insert({id: 88805, name: 'Makere Kupenga', age: 5}),
        knex('children').insert({id: 88806, name: 'Taihuri Kupenga', age: 3}),
        knex('children').insert({id: 88807, name: 'Pouramua Kupenga', age: 2}),
        knex('children').insert({id: 88808, name: 'Te Ataakura Apanui', age: 5}),
        knex('children').insert({id: 88809, name: 'Pakanui Apanui', age: 3}),
        knex('children').insert({id: 88810, name: 'Te Aomihia Apanui', age: 1}),
        knex('children').insert({id: 88812, name: 'Tahatu Parata-Burney', age: 1}),
        knex('children').insert({id: 88813, name: 'Taybra Sykes-Martin', age: 3}),
        knex('children').insert({id: 88814, name: 'Tuparoa Kopua', age: 2}),
      ])
    })
}
