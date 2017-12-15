//Update the name of the controller below and rename the file.
const donor = require("../controllers/donor.js")
const gift = require("../controllers/gift.js")
module.exports = function(app){

                    /***** DONOR ROUTES *****/

  // Load ALL DONORS ( <DonorList /> )
  app.get('/donorlist', donor.getAll);

  // Select a DONOR - SHOW GIFT HISTORY
  app.get('/donor/:id', donor.getOne_Gifts);

  // Retrieve DONOR details for EDIT FORM ( <DonorEditForm /> )
  app.get('/donor/edit/:id', donor.getDonor);

  // Update DONOR
  app.post('/donor/update/:id', donor.updateDonor);


  // Insert/Create NEW DONOR record
  app.post('/donors', donor.createDonor);

  // Drop/Delete SINGLE DONOR record
  app.delete('/donor/delete/:id', donor.deleteDonor);


                    /***** GIFT ROUTES *****/

  // Get ALL GIFTS
  app.get('/giftlist', gift.getAll);

  // Retrieve GIFT details for EDIT FORM ( <GiftEditForm /> )
  app.get('/gift/edit/:id', gift.getGift);

  // Insert/Create NEW GIFT entry
  app.post('/gifts', gift.createGift);

  // Drop/Delete SINGLE GIFT entry
  app.get('gift/delete/:id', gift.deleteGift)

/*



  //Submit UPDATES to SINGLE GIFT record in db
  app.post('/gift/:id', gift.updateGift); //Submit edits to gift record

  */
}
