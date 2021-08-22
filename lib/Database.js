const { Model } = require('objection');
const Knex = require('knex');

// Initialize knex.
const knex = Knex({
  client: 'mysql2',
  useNullAsDefault: true,
  connection: {
    database: process.env.database,
    user: process.env.user,
    password: process.env.password
  }
});

// Give the knex instance to objection.
Model.knex(knex);