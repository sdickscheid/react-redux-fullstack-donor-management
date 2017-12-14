import React from 'react';
// import { getSelectedDonor } from '../actions/action_donors';
import { connect } from 'react-redux';

const DonorDetail = ({donor, selectedDonor}) => {

  console.log('Donor Detail-Donor', donor);
  console.log('Donor Detail-Selected', selectedDonor);

  return (


    <div className="donor-details-container">
      <div className="donor-details-section">
        <li>{selectedDonor ? selectedDonor.id : null}</li>
        <li>{selectedDonor ? selectedDonor.name : null}</li>
        <li>{selectedDonor ? selectedDonor.address_1 : null}</li>
        <li>{selectedDonor ? selectedDonor.address_2 : null}</li>
        <li>{selectedDonor ? selectedDonor.city_town : null}</li>
        <li>{selectedDonor ? selectedDonor.state : null}</li>
        <li>{selectedDonor ? selectedDonor.zip_code : null}</li>
        <li>{selectedDonor ? selectedDonor.phone : null}</li>
        <li>{selectedDonor ? selectedDonor.email : null}</li>
        <li>{selectedDonor ? selectedDonor.program_interests : null}</li>
        <li>{selectedDonor ? selectedDonor.comments : null}</li>
      </div>

      {/* <div className="donor-gifts-section">
        <li>{gift.id}</li>
        <li>{donor.id}</li>
        <li>{donor_name}</li>
        <li>{gift.program}</li>
        <li>{gift.gift_amount}</li>
        <li>{gift.gift_date}</li>
        <li>{gift.transaction_type}</li>
        <li>{gift.receipt_status}</li>
      </div> */}

    </div>

  )
}


function mapStateToProps(state, props) {
  return {
    selectedDonor: state.selectedDonor
  }
}


export default connect(mapStateToProps, null)(DonorDetail);
