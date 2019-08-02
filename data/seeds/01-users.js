
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'damolasd@gmail.com', username: 'Damolasd', password: '1234567890'}
        
      ]);
    });
};
