exports.up = function(knex, Promise) {
  return knex.schema.createTable('donors', (table)=>{
    table.increments();
    table.string('name');
    table.string('address_1');
    table.string('address_2');
    table.string('city_town');
    table.string('state');
    table.integer('zip_code');
    table.string('phone');
    table.string('email');
    table.string('program_interests');
    table.text('comments');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('donors');
};
