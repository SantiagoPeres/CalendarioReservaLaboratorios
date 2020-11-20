exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('teachers')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('teachers').insert([
        {
          teacher_id: 1,
          name: 'Aparecido Vilela',
          email: 'aparecido.vilela@unicesumar.edu.br',
        },
        {
          teacher_id: 2,
          name: 'Henrique Vignando',
          email: 'henrique.vignando@unicesumar.edu.br',
        },
        {
          teacher_id: 3,
          name: 'Arthur Zavadski',
          email: 'arthur.zavadski@unicesumar.com.br',
        },
        {
          teacher_id: 4,
          name: 'Maurilio Martins',
          email: 'maurilio.martins@unicesumar.com.br',
        },
        {
          teacher_id: 5,
          name: 'Nelson Nunes',
          email: 'nelson.nunes@unicesumar.com.br',
        },
        {
          teacher_id: 6,
          name: 'Iara Carnevale',
          email: 'iara.carnevale@unicesumar.com.br',
        },
      ])
    );
};
