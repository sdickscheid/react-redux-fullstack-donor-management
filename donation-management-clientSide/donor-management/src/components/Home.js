import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <h4 className="home-welcome-title">Welcome to your Donor Management Portal</h4>
        </Col>
      </Row>

      <Row>
        <Col sm="12" md="5" md="offset-0" className="btns-container-home">
          <Row>
            <Link
              className="btn btn-secondary btns-home-add-new"
              to={"/create-new-donor"}
            >Add New Donor</Link>
          </Row>
          {/* <Row>
            <Link
              className="btn btn-secondary btns-home-add-new"
              to={"/create-new-gift"}
            >Add New Gift</Link>
          </Row> */}
        </Col>
      </Row>
    </Container>
  )
}
export default Home;
