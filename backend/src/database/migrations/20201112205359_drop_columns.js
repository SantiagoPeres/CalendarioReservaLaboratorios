exports.up = function (knex) {
  return knex.schema.table('schedule', (table) => {
    table.dropColumn('day');
    table.dropColumn('month');
  });
};

exports.down = function (knex) {};
