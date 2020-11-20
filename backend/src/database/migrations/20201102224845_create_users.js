exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('user_id').primary();
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.integer('teacher').unsigned().notNullable();
    table.foreign('teacher').references('teacher_id').inTable('teachers');
  });
};

exports.down = (knex) => {};
