
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('raiders').del()
    .then(function () {
      // Inserts seed entries
      return knex('raiders').insert([
		{
			raiderId: 1,
			name: 'Goblin Runt',
			attack: 1,
			defence: 1,
			dodge: 1,
			sneak: 1,
			requiredRenown: 250,
			goldStealable: 400,
			cost: 0,
			description: '',
		},
		{
			raiderId: 2,
			name: 'Goblin Cleaver',
			attack: 2,
			defence: 1,
			dodge: 2,
			sneak: 1,
			requiredRenown: 250,
			goldStealable: 600,
			cost: 10,
			description: '',
		},
		{
			raiderId: 3,
			name: 'Orc Warrior',
			attack: 2,
			defence: 2,
			dodge: 1,
			sneak: 1,
			requiredRenown: 250,
			goldStealable: 600,
			cost: 15,
			description: '',
		},
		{
			raiderId: 4,
			name: 'Saurus Spawn',
			attack: 1,
			defence: 1,
			dodge: 3,
			sneak: 2,
			requiredRenown: 250,
			goldStealable: 800,
			cost: 20,
			description: '',
		},
      ]);
    });
};
