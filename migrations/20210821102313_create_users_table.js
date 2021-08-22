
exports.up = function(knex) {
	return knex.schema.createTable('users', function(table) {{
		table.increments('userId').primary();
		table.string('username', 20).notNullable();
		table.string('password').notNullable();
		table.integer('renown').defaultsTo(250).notNullable();
		table.integer('gold').defaultsTo(100).notNullable();
		//achievements ?
	}})
};

exports.down = function(knex) {
	return knex.schema.dropTable('users');
};
