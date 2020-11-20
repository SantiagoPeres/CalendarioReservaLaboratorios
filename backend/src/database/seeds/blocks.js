exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('blocks')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('blocks').insert([
        { block_id: 1, identification: 'Bloco 5' },
        { block_id: 2, identification: 'Bloco 6' },
        { block_id: 3, identification: 'Bloco 7' },
        { block_id: 4, identification: 'Bloco 8' },
        { block_id: 5, identification: 'Bloco 9' },
        { block_id: 6, identification: 'Bloco 10' },
      ])
    );
};
