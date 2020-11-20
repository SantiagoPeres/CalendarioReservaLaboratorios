exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('laboratory')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('laboratory').insert([
        { laboratory_id: 1, identification: 'Laboratório 01', block_id: 6 },
        { laboratory_id: 2, identification: 'Laboratório 02', block_id: 6 },
        { laboratory_id: 3, identification: 'Laboratório 03', block_id: 6 },
        { laboratory_id: 4, identification: 'Laboratório 04', block_id: 6 },
        { laboratory_id: 5, identification: 'Laboratório 05', block_id: 6 },
        { laboratory_id: 6, identification: 'Laboratório 01', block_id: 1 },
        { laboratory_id: 7, identification: 'Laboratório 01', block_id: 2 },
        { laboratory_id: 8, identification: 'Laboratório 01', block_id: 3 },
        { laboratory_id: 9, identification: 'Laboratório 01', block_id: 4 },
        { laboratory_id: 10, identification: 'Laboratório 01', block_id: 5 },
      ])
    );
};
