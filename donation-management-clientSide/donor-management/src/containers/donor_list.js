import React, { Component } from 'react';
import Donor from '../components/donor';
import { connect } from 'react-redux';

import { Container, Row, Col } from 'reactstrap';

class DonorList extends Component {
  render () {

    let donors;
    if(this.props.donors) {
      donors = this.props.donors.map(donor => {
        return (
          <Col md="4" key={donor.id}>
            <Donor donor={donor}/>
          </Col>
        )
      })
    } else {
      donors = <div>Loading...</div>
    }

    console.log('props in donorlist', this.props);
    return (
      <div>
        <Container>
          <Row>
            {donors}
          </Row>
        </Container>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    donors: state.donors
  }
}
export default connect(mapStateToProps, null)(DonorList);
