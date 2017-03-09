exports.seed = function (knex, Promise) {
  return knex('parents').del()
    .then(function () {
      return Promise.all([
        knex('parents').insert({id: 99901, name: 'Pouramua Kupenga', email: 'pouramua@gmail.com'}),
        knex('parents').insert({id: 99902, name: 'Makere Kahaki', email: 'makere@gmail.com'}),
        knex('parents').insert({id: 99903, name: 'Taihuri Reedy', email: 'taihuri@gmail.com'}),
        knex('parents').insert({id: 99904, name: 'Donette Kupenga', email: 'donette@gmail.com'}),
        knex('parents').insert({id: 99905, name: 'Fiona Apanui', email: 'fiona@gmail.com'}),
        knex('parents').insert({id: 99906, name: 'Rua Low', email: 'rua@gmail.com'}),
        knex('parents').insert({id: 99907, name: 'Kohineoha Parata-Burney', email: 'kohine@gmail.com'}),
        knex('parents').insert({id: 99908, name: 'Taylah Sykes-Martin', email: 'taylaha@gmail.com'}),
        knex('parents').insert({id: 99909, name: 'Toapapa Kopua', email: 'toapapa@gmail.com'}),
        knex('parents').insert({id: 99910, name: 'Janett Marshall', email: 'ngareta@gmail.com'}),
      ]);
   });
};
