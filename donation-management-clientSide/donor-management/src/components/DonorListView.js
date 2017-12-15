import React from 'react';
import DonorList from './DonorList';
import DonorDetail from './DonorDetail';
import { Link } from 'react-router-dom';
// import TopNavBar from './TopNavBar';
import { Container, Row, Col, Button, FormGroup, Input, } from 'reactstrap';

const DonorListView = (props) => {
  return (

    <Container>
      <Row>
        <Col md="3">
          <Row>
            <Col>
              <Link
                className="btn btn-secondary btn-DonorListView-create-donor "
                to={"/create-new-donor"}
              >
                Create New Donor
              </Link>

              {/* <Button className="btn-create-donor-dlView">Create New Donor</Button>  */}
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
                <Input className="search-bar" type="text" placeholder="Search by donor name here..." />
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
