import React from 'react';
// import { getSelectedDonor } from '../actions/action_donors';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

const DonorListItem = ({donor}) => {

  console.log('DonorListItem Page', donor);
  // let id = donor.id

  return (
    <div>
      <p
        key={donor.id}
        className="donor-list-item">{donor.name}
      </p>
    </div>
  )
}

// function mapDispatchToProps(dispatch) {
//   return {
//     selectedDonor: bindActionCreators(getSelectedDonor, dispatch)
//   }
// }

  // onClick={() => this.props.getSelectedDonor(id)}

export default DonorListItem;
