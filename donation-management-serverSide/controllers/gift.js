const knex = require("../db/knex.js");

module.exports = {

  // Load ALL GIFTS ( <GiftList /> )
  getAll: function(req, res) {
  knex('gifts')
    .then((giftList) =>{
      console.log(giftlist);
      res.render('giftlist', {gifts: giftList});
    })
    .catch((err) => {
      console.error(err)
    });
  },

  // Retrieve GIFT details for EDIT FORM ( <GiftEditForm /> )
  getGift: function(req, res) {
    knex('gifts')
      .where('id', req.params.id)
      .then((gift) => {
        console.log('GIFT to be EDITED', gift);
        res.render('gift_edit_form', { gift: gift[0] });
      })
      .catch((err) => {
        console.error(err)
      });
  },


  // Insert/Create NEW GIFT entry
  createGift: function(res, res) {
    knex('gifts')
      .insert({
        donor_id: req.body.donor_id,
        program: req.body.program,
        gift_amount: req.body.gift_amount,
        gift_date: req.body.gift_date,
        transaction_type: req.body.transaction_type,
        receipt_status: req.body.receipt_status
      })
      .then(() => {
        res.redirect('/giftlist')
      })
      .catch((err) => {
        console.error(err)
      });
  },

  // Drop/Delete SINGLE GIFT entry
  deleteGift: function(req, res) {
    knex('gifts')
      .del()
      .where('id', req.params.id)
      .then(() => {
        res.redirect('/giftlist');
      })
      .catch((err) => {
        console.error(err)
      });
  }


}
