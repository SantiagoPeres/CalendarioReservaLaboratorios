exports.up = (knex) => {
  return knex.schema.createTable('schedule', (table) => {
    table.increments('schedule_id').primary();
    table.string('class').notNullable();
    table.string('subject').notNullable();
    table.date('date').notNullable();
    table.time('start_time').notNullable();
    table.integer('teacher_id').unsigned().notNullable();
    table.integer('laboratory_id').unsigned().notNullable();
    table.foreign('teacher_id').references('teacher_id').inTable('teachers');
    table
      .foreign('laboratory_id')
      .references('laboratory_id')
      .inTable('laboratory');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('schedule');
};
