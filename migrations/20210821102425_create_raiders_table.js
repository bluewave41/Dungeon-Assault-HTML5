
exports.up = function(knex) {
	return knex.schema.createTable('raiders', function(table) {
		table.integer('raiderId').primary();
		table.string('name').notNullable();
		table.tinyint('attack').notNullable();
		table.tinyint('defence').notNullable();
		table.tinyint('dodge').notNullable();
		table.tinyint('sneak').notNullable();
		table.smallint('requiredRenown').notNullable();
		table.smallint('goldStealable').notNullable();
		table.smallint('cost').notNullable();
		table.string('description').notNullable();
	})
};

exports.down = function(knex) {
	return knex.schema.dropTable('raiders');
};
