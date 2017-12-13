const knex = require("../db/knex.js");

module.exports = {

  // Load ALL DONORS ( <DonorList /> )
  getAll: function(req, res) {
  knex('donors')
    .then((donorList) =>{
      console.log('DONORLIST', donorList)
      res.json(donorList);
    })
    .catch((err) => {
      console.error(err)
    });
  },


  // Select a DONOR - SHOW GIFT HISTORY
  getOne_Gifts: function(req, res) {
    knex('donors')
      .where('id', req.params.id)
      .then((donor) => {
        console.log('DONOR DETAILS', donor);

        knex('gifts')
          .where('donor_id', req.params.id)
          .then((donorGifts) => {
            console.log('GIFTS BY DONOR', donorGifts);
            res.json(donor[0], donorGifts);
          })
          .catch((err) => {
            console.error(err)
          });
      })
  },

  // Retrieve DONOR details for EDIT FORM ( <DonorEditForm /> )
  getDonor: function(req, res) {
    knex('donors')
      .where('id', req.params.id)
      .then((donor) => {
        console.log('DONOR', donor);
        res.json(donor[0]);
      })
      .catch((err) => {
        console.error(err)
      });
  },

  // Insert/Create NEW DONOR record
  createDonor: function(req, res) {
    knex('donors')
      .insert({
        name: req.body.name,
        address_1: req.body.address_1,
        address_2: req.body.address_2,
        city_town: req.body.city_town,
        state: req.body.state,
        zip_code: req.body.zip_code,
        phone: req.body.phone,
        email: req.body.email,
        program_interests: req.body.program_interests,
        comments: req.body.comments
      }, '*')
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => {
        console.error(err)
      });
  },

  // Drop/Delete SINGLE DONOR record
  deleteDonor: function(req, res) {
    knex('donors')
      .del()
      .where('id', req.params.id)
      .then(() => {
        res.redirect('/booklist');
      })
      .catch((err) => {
        console.error(err)
      });
  }


}
