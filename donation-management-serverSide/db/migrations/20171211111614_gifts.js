exports.up = function(knex, Promise) {
  return knex.schema.createTable('gifts', (table)=>{
    table.increments();
    table.integer('donor_id');
    table.string('donor_name');
    table.string('program');
    table.string('gift_amount');
    table.date('gift_date');
    table.string('transaction_type');
    table.string('receipt_status');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('gifts');
};
