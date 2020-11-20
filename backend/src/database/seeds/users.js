exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          user_id: 1,
          username: 'usuarioteste',
          password: 'asdqwe11',
          teacher_id: 1,
        },
        {
          user_id: 2,
          username: 'usuarioteste2',
          password: 'asdqwe11',
          teacher_id: 3,
        },
      ]);
    });
};
