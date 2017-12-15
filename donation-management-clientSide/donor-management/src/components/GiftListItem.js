import React, {Component} from 'react';
import { getAllDonorGifts } from '../actions/action_gifts';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class GiftListItem extends Component {

  render(){
    return (
      <div>
        <tr
          key={this.props.gift.id}
        >
          <th scope="row">{this.props.gifts.id}</th>
          <td>{this.props.gifts.id}</td>
          <td>{this.props.gifts.donor_name}</td>
          <td>{this.props.gifts.program}</td>
          <td>{this.props.gifts.gift_amount}</td>
          <td>{this.props.gifts.gift_date}</td>
          <td>{this.props.gifts.transaction_type}</td>
          <td>{this.props.gifts.receipt_status}</td>
        </tr>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllDonorGifts: bindActionCreators(getAllDonorGifts, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(GiftListItem);
