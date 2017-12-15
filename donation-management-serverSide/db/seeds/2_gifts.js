
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gifts').del()
    .then(function () {
      // Inserts seed entries
      return knex('gifts').insert([
        {donor_id: 1, donor_name: 'Bob Kirby', program: 'Hunger', gift_amount: '$500.00', gift_date: '03/15/2016', transaction_type: 'Check', receipt_status: 'Provided'},

        {donor_id: 2, donor_name: 'Kevin Malko', program: 'Homelessness', gift_amount: '$250.00', gift_date: '02/15/2016', transaction_type: 'Check', receipt_status: 'Provided'},

        {donor_id: 2, donor_name: 'Kevin Malko', program: 'Hungar', gift_amount: '$150.00', gift_date: '02/15/2016', transaction_type: 'Check', receipt_status: 'Provided'},

        {donor_id: 3, donor_name: 'Amanda Casper', program: 'Elder Care', gift_amount: '$325.00', gift_date: '05/10/2016', transaction_type: 'Check', receipt_status: 'Provided'},

        {donor_id: 4, donor_name: 'Martha Jones', program: 'Hunger', gift_amount: '$1,250.00', gift_date: '04/24/2016', transaction_type: 'Certified Check', receipt_status: 'Provided'},

        {donor_id: 5, donor_name: 'Brian Conohan', program: 'Hunger', gift_amount: '$750.00', gift_date: '08/05/2016', transaction_type: 'Check', receipt_status: 'Provided'},

        {donor_id: 6, donor_name: 'Bryan Veto', program: 'Education', gift_amount: '$50.00', gift_date: '01/12/2017', transaction_type: 'Cash', receipt_status: 'Provided'},

        {donor_id: 7, donor_name: 'Adam Schwartz', program: 'Hunger', gift_amount: '$50.00', gift_date: '03/01/2017', transaction_type: 'Cash', receipt_status: 'Provided'},

        {donor_id: 8, donor_name: 'Karen VanCleef', program: 'Education', gift_amount: '$250.00', gift_date: '03/23/2017', transaction_type: 'Check', receipt_status: 'Provided'},

        {donor_id: 9, donor_name: 'Marlon Smith', program: 'Homelessness', gift_amount: '$500.00', gift_date: '04/10/2017', transaction_type: 'Certified Check', receipt_status: 'Not Provided'},

        {donor_id: 10, donor_name: 'Betsy McBooger', program: 'Homelessness', gift_amount: '$1,500.00', gift_date: '04/19/2017', transaction_type: 'Credit Card', receipt_status: 'Provided'},

        {donor_id: 4, donor_name: 'Martha Jones', program: 'Elder Care', gift_amount: '$750.00', gift_date: '5/24/2017', transaction_type: 'Certified Check', receipt_status: 'Provided'},

        {donor_id: 9, donor_name: 'Marlon Smith', program: 'Homelessness', gift_amount: '$150.00', gift_date: '06/08/2017', transaction_type: 'Credit Card', receipt_status: 'Not Provided'},

        {donor_id: 11, donor_name: 'Winston Madison', program: 'Elder Care', gift_amount: '$250.00', gift_date: '07/04/2017', transaction_type: 'Credit Card', receipt_status: 'Not Provided'},

        {donor_id: 12, donor_name: 'Andrew Cappelini', program: 'Homelessness', gift_amount: '$2,500.00', gift_date: '08/09/2017', transaction_type: 'Check', receipt_status: 'Provided'},

        {donor_id: 13, donor_name: 'Jill Masters', program: 'Hunger', gift_amount: '$320.00', gift_date: '08/09/2017', transaction_type: 'Credit Card', receipt_status: 'Not Provided'},

        {donor_id: 14, donor_name: 'Arther McJames', program: 'Homelessness', gift_amount: '$10,500.00', gift_date: '08/09/2017', transaction_type: 'Certified Check', receipt_status: 'Provided'},

        {donor_id: 15, donor_name: 'Karen Huey', program: 'Education', gift_amount: '$800.00', gift_date: '10/12/2017', transaction_type: 'Check', receipt_status: 'Provided'},

        {donor_id: 16, donor_name: 'Christopher Scott', program: 'Education', gift_amount: '$1,125.00', gift_date: '10/15/2017', transaction_type: 'Check', receipt_status: 'Provided'},

        {donor_id: 17, donor_name: 'Kirsten Blume', program: 'Hunger', gift_amount: '$500.00', gift_date: '12/28/2017', transaction_type: 'Check', receipt_status: 'Not Provided'},

      ]);
    });
};
