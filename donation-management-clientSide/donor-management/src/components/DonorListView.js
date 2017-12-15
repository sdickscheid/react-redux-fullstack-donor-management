import React from 'react';
import DonorList from './DonorList';
import DonorDetail from './DonorDetail';
// import TopNavBar from './TopNavBar';
import { Container, Row, Col, Button, FormGroup, Input, } from 'reactstrap';

const DonorListView = (props) => {
  return (

    <Container>
      <Row>
        <Col md="3">
          <Row>
            <Col>
              <Button className="btn-create-donor-dlView">Create New Donor</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 className="donor-list-title">Select a Donor</h5>
            </Col>
          </Row>
          <Row>
            <Col className="donor-list-container">
              <DonorList/>
            </Col>
          </Row>
        </Col>

        <Col md="9">
          <Row>
            <Col>
              <FormGroup>
                <Input type="text" placeholder="Search by donor name here..." />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <DonorDetail />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default DonorListView
