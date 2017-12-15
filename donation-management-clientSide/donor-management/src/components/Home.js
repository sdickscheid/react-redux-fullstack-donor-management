import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const Home = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <h4 className="home-welcome-title">Welcome to your Donor Management Portal</h4>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button className="btns-home-add-new">Add New Donor</Button>
        </Col>
        <Col>
          <Button>Add New Gift</Button>
        </Col>
      </Row>
    </Container>
  )
}
export default Home;
