import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import GiftListItem from '../components/GiftListItem';
import { connect } from 'react-redux';

class GiftList extends Component {
  render() {

    let gifts;
    console.log(gifts);
    if(!this.props.gifts) {
      gifts = this.props.gifts.map(gift => {
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
                    <tr>
                      <GiftListItem gift={gift} />
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
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
    gifts: state.gifts
  }
}

export default connect(mapStateToProps, null)(GiftList);
