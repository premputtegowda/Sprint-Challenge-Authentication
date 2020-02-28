const knex = require('knex');

const knexConfig = require('../knexfile.js');

const environment = process.env.CURR_ENV || 'development';

module.exports = knex(knexConfig[environment]);
