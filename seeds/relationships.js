exports.seed = function (knex, Promise) {
  return knex('relationships').del()
    .then(function () {
      return Promise.all([
        knex('relationships').insert({ id: 77701, parents_id: 99901, children_id:88801}),
        knex('relationships').insert({ id: 77702, parents_id: 99902, children_id:88801}),
        knex('relationships').insert({ id: 77703, parents_id: 99903, children_id:88802}),
        knex('relationships').insert({ id: 77704, parents_id: 99904, children_id:88803}),
        knex('relationships').insert({ id: 77705, parents_id: 99905, children_id:88804}),
        knex('relationships').insert({ id: 77706, parents_id: 99905, children_id:88805}),
        knex('relationships').insert({ id: 77707, parents_id: 99905, children_id:88806}),
        knex('relationships').insert({ id: 77708, parents_id: 99905, children_id:88807}),
        knex('relationships').insert({ id: 77709, parents_id: 99906, children_id:88808}),
        knex('relationships').insert({ id: 77710, parents_id: 99906, children_id:88809}),
        knex('relationships').insert({ id: 77711, parents_id: 99906, children_id:88810}),
        knex('relationships').insert({ id: 77712, parents_id: 99907, children_id:88808}),
        knex('relationships').insert({ id: 77713, parents_id: 99907, children_id:88809}),
        knex('relationships').insert({ id: 77714, parents_id: 99907, children_id:88810}),
        knex('relationships').insert({ id: 77715, parents_id: 99908, children_id:88811}),
        knex('relationships').insert({ id: 77716, parents_id: 99909, children_id:88811}),
        knex('relationships').insert({ id: 77717, parents_id: 99910, children_id:88812}),
        knex('relationships').insert({ id: 77718, parents_id: 99911, children_id:88812}),
        knex('relationships').insert({ id: 77719, parents_id: 99912, children_id:88813}),
      ])
    })
}
