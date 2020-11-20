const knex = require('knex');
const config = require('../../knexfile');

const env = 'development';
const connection = config[env];

module.exports = knex(connection);
