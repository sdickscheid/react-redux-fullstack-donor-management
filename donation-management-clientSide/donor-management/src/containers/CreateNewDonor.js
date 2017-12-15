import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import { addDonor } from '../actions/action_donors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CreateNewDonor extends Component {

  state = {
    name: '',
    address_1: '',
    address_2: '',
    city_town: '',
    state: '',
    zip_code: '',
    phone: '',
    email: '',
    program_interests: '',
    comments: ''
  }

  handleSubmit = (e) => {
  e.preventDefault()
  this.props.addDonor(this.state)
  // v_ the below clears the form inputs after submission
  this.setState({ name: '', address_1: '', address_2: '', city_town: '', state: '', zip_code: '', phone: '', email: '', program_interests: '', comments: ''})
  }

  render() {
    return (
      <Container>
        <h3 className="title-create-edit-form">Create a New Donor</h3>
        <Form
          onSubmit={this.handleSubmit}
          className="form-container"
        >
          <FormGroup row>
            <Label for="donor_name" sm={2}>Name</Label>
            <Col sm={10}>
              <Input
                type="text"
                name="donor_name"
                id="id_donor_name"
                onChange={(e) => this.setState({ name: e.target.value})}
                value={this.state.name}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="program_interests" sm={2}>Program Interests</Label>
            <Col sm={10}>
              <Input
                type="select"
                name="primary_interest"
                id="id_program_interest"
                onChange={(e) => this.setState({ program_interests: e.target.value})}
                value={this.state.program_interests}
              >
                  <option>Education</option>
                  <option>Elder Care</option>
                  <option>Homelessness</option>
                  <option>Hunger</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="address_1" sm={2}>Address 1</Label>
            <Col sm={10}>
              <Input
                type="text"
                name="address_1"
                id="id_address_1"
                onChange={(e) => this.setState({ address_1: e.target.value})}
                value={this.state.address_1}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="address_2" sm={2}>Address 2</Label>
            <Col sm={10}>
              <Input
                type="text"
                name="address_2"
                id="id_address_2"
                onChange={(e) => this.setState({ address_2: e.target.value})}
                value={this.state.address_2}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="city_town" sm={2}>City/Town</Label>
            <Col sm={10}>
              <Input
                type="text"
                name="city_town"
                id="id_city_town"
                onChange={(e) => this.setState({ city_town: e.target.value})}
                value={this.state.city_town}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="state" sm={2}>State</Label>
            <Col sm={10}>
              <Input
                type="text"
                name="state"
                id="id_state"
                onChange={(e) => this.setState({ state: e.target.value})}
                value={this.state.state}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="phone" sm={2}>Phone</Label>
            <Col sm={10}>
              <Input
                type="text"
                name="phone"
                id="id_phone"
                onChange={(e) => this.setState({ phone: e.target.value})}
                value={this.state.phone}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="email" sm={2}>Email</Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="email"
                onChange={(e) => this.setState({ email: e.target.value})}
                value={this.state.email}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="comments" sm={2}>Comments</Label>
            <Col sm={10}>
              <Input
                type="textarea"
                name="comments"
                id="id_comments"
                onChange={(e) => this.setState({ comments: e.target.value})}
                value={this.state.comments}
              />
            </Col>
          </FormGroup>
          <Button className="btn-CreateNewDonor-submit">Submit New Donor Record</Button>
        </Form>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addDonor: bindActionCreators(addDonor, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(CreateNewDonor)
