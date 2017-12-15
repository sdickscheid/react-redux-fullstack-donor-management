import React, {Component} from 'react';
import { getSelectedDonor } from '../actions/action_donors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DonorListItem extends Component {
  render(){
    return (
      <div>
        <p
          key={this.props.donor.id}
          onClick={() => this.props.getSelectedDonor(this.props.donor.id)}
          className="donor-list-item"
        >
            {this.props.donor.name}
        </p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getSelectedDonor: bindActionCreators(getSelectedDonor, dispatch)
  }
}


export default connect(null, mapDispatchToProps)(DonorListItem);
