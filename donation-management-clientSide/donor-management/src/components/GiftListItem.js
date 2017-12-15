import React, {Component} from 'react';
import { getAllDonorGifts } from '../actions/action_gifts';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class GiftListItem extends Component {

  render(){

    if(this.props.gift) {
      return (
          <tr
            key={this.props.gift.id}
          >
            <th scope="row">{this.props.gift.id}</th>
            {/* <td>{this.props.gift.id}</td> */}
            <td>{this.props.gift.donor_name}</td>
            <td>{this.props.gift.program}</td>
            <td>{this.props.gift.gift_amount}</td>
            <td>{this.props.gift.gift_date}</td>
            <td>{this.props.gift.transaction_type}</td>
            <td>{this.props.gift.receipt_status}</td>
          </tr>
      );
    } else {
      return <div>Gifts Loading...</div>
    }

  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllDonorGifts: bindActionCreators(getAllDonorGifts, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(GiftListItem);
