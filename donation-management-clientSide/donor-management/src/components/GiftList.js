import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import GiftListItem from '../components/GiftListItem';
import { connect } from 'react-redux';

class GiftList extends Component {
  render() {

    let gifts;

    console.log('PROPS CAN YOU HEAR ME', this.props);
    if(this.props.gifts) {
      gifts = this.props.gifts.map(gift => {
        return (
          <GiftListItem gift={gift} />
        );
      })
    } else {
      gifts = <div>Loading...</div>
    }

    return (
      <Container>
        <Row>
          <Col>
            <Table hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Donor Name</th>
                  <th>Program</th>
                  <th>Gift Amount</th>
                  <th>Gift Date</th>
                  <th>Transaction Type</th>
                  <th>Receipt Status</th>
                </tr>
              </thead>
              <tbody>
                {gifts}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    gifts: state.donorGifts
  }
}

export default connect(mapStateToProps, null)(GiftList);
