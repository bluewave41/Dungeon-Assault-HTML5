
exports.up = function(knex) {
	return knex.schema.createTable('stable', function(table) {
		table.integer('userId').references('userId').inTable('users').unsigned().notNullable();
		table.integer('raiderId').references('raiderId').inTable('raiders').notNullable();
		table.tinyint('attack').notNullable();
		table.tinyint('defence').notNullable();
		table.tinyint('dodge').notNullable();
		table.tinyint('sneak').notNullable();
		table.tinyint('status').notNullable();
	})
};

exports.down = function(knex) {
	return knex.schema.dropTable('stable');
};
