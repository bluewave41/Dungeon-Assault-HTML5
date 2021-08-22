
exports.up = function(knex) {
	return knex.schema.createTable('dungeon', function(table) {
		table.integer('userId').references('userId').inTable('users').unsigned().notNullable();
		table.tinyint('tileId').notNullable();
		table.tinyint('trapId');
	})
};

exports.down = function(knex) {
	return knex.schema.dropTable('dungeon');
};
