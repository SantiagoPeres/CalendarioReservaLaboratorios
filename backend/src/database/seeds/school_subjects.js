exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('school_subjects')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('school_subjects').insert([
        { school_subject_id: 1, name: 'Banco de Dados' },
        { school_subject_id: 2, name: 'Programação Web' },
        { school_subject_id: 3, name: 'Gerenciamento de Configurações' },
        { school_subject_id: 4, name: 'Teoria da Computação' },
        { school_subject_id: 5, name: 'Testes Unitários' },
        { school_subject_id: 6, name: 'Paradigmas da Programação' },
        { school_subject_id: 7, name: 'Inteligência Artificial' },
      ])
    );
};
