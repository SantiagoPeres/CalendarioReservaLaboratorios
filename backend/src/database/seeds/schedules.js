exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('schedule')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('schedule').insert([
        {
          schedule_id: 1,
          school_class: 'ESOFT6S',
          subject: 'Paradigmas da Programação',
          date: '2020-12-01',
          start_time: '21:00',
          teacher_id: 1,
          laboratory_id: 1,
        },
        {
          schedule_id: 2,
          school_class: 'ESOFT6S',
          subject: 'Teoria da Computação',
          date: '2020-12-01',
          start_time: '19:00',
          teacher_id: 4,
          laboratory_id: 1,
        },
        {
          schedule_id: 3,
          school_class: 'ESOFT6S',
          subject: 'Gerenciamento de Configuração',
          date: '2020-12-04',
          start_time: '19:00',
          teacher_id: 3,
          laboratory_id: 3,
        },
        {
          schedule_id: 4,
          school_class: 'ESOFT6S',
          subject: 'Inteligência Artificial',
          date: '2020-11-25',
          start_time: '21:00',
          teacher_id: 5,
          laboratory_id: 2,
        },
      ]);
    });
};
