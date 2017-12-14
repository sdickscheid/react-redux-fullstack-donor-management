import React from 'react';
import DonorList from './DonorList';
import DonorDetail from './DonorDetail';
import { Container, Row, Col, Button, FormGroup, Input, } from 'reactstrap';

const DonorListView = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col>
            <Button className="btn-create-dlView">Create New Donor</Button>
            <DonorList/>
            </Col>
          </Row>
        </Col>

        <Col>
          <Row>
            <Col>
              <FormGroup>
                <Input type="text" placeholder="Search" />
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
