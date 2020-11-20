exports.up = (knex) => {
  return knex.schema.createTable('laboratory', (table) => {
    table.increments('laboratory_id').primary();
    table.string('identification').notNullable();
    table.integer('block_id').unsigned().notNullable();
    table.foreign('block_id').references('block_id').inTable('blocks');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('laboratory');
};
