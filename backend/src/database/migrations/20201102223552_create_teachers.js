exports.up = (knex) => {
  return knex.schema.createTable('teachers', (table) => {
    table.increments('teacher_id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('teachers');
};
