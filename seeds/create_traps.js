
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('traps').del()
    .then(function () {
      // Inserts seed entries
      return knex('traps').insert([
		{
			trapId: 1,
			name: 'Tripwire Bell',
			attack: 0,
			defence: 0,
			snare: 0,
			detect: 2,
			description: 'a'
		}
      ]);
    });
};
