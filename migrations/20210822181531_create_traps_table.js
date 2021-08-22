
exports.up = function(knex) {
	return knex.schema.createTable('traps', function(table) {
		table.integer('trapId').primary().notNullable();
		table.string('name').notNullable();
		table.tinyint('attack').notNullable();
		table.tinyint('defence').notNullable();
		table.tinyint('snare').notNullable();
		table.tinyint('detect').notNullable();
		table.string('description').notNullable();
	})
};

exports.down = function(knex) {
	return knex.schema.dropTable('traps');
};
