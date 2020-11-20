exports.up = function (knex) {
  return knex.schema.table('schedule', (table) => {
    table.date('date');
  });
};

exports.down = function (knex) {};
