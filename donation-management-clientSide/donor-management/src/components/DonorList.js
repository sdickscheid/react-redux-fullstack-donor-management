import React, { Component } from 'react';
import DonorListItem from '../components/DonorListItem';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

class DonorList extends Component {

  render () {

    let donors;

    if(this.props.donors) {
      donors = this.props.donors.map(donor => {
        return (
          <Col className="donor-list-item-container" key={donor.id}>
            <DonorListItem donor={donor}/>
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
