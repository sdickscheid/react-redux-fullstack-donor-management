import React, { Component } from 'react';

import DonorListItem from '../components/DonorListItem';
// import { getSelectedDonor } from '../actions/action_donors';

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { Container, Row, Col } from 'reactstrap';

class DonorList extends Component {

  state = {
    id: '',
    name: '',
    address_1: '',
    address_2: '',
    city_town: '',
    state: '',
    zip_code: '',
    phone: '',
    email: '',
    comments: ''
  }
  
  render () {

    let donors;

    if(this.props.donors) {
      donors = this.props.donors.map(donor => {
        return (
          <Col md="4" key={donor.id}>
            <DonorListItem
              donor={donor}
            />
          </Col>
        )
      })
    } else {
      donors = <div>Loading...</div>
    }

    return (
      <div>
        <Container>
          <Row>
            <Col>
              {donors}
            </Col>
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
