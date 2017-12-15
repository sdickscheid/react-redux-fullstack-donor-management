import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

export default class DonorEditForm extends React.Component {
  render() {
    return (
      <Container>
        <h3>Edit Donor Information for </h3>
        <Form>
          <FormGroup>
            <Label for="donor_name">Name</Label>
            <Input type="text" name="donor_name" id="id_donor_name" />
          </FormGroup>
          <FormGroup>
            <Label for="primary_interest">Primary Program Interests</Label>
            <Input type="text" name="primary_interest" id="id_primary_interest" />
          </FormGroup>
          <FormGroup>
            <Label for="address_1">Address 1</Label>
            <Input type="text" name="address_1" id="id_address_1" />
          </FormGroup>
          <FormGroup>
            <Label for="address_2">Address 2</Label>
            <Input type="text" name="address_2" id="id_address_2" />
          </FormGroup>
          <FormGroup>
            <Label for="city_town">City/Town</Label>
            <Input type="text" name="city_town" id="id_city_town" />
          </FormGroup>
          <FormGroup>
            <Label for="state">State</Label>
            <Input type="text" name="state" id="id_state" />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone</Label>
            <Input type="text" name="phone" id="id_phone" />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" />
          </FormGroup>
          <FormGroup>
            <Label for="comments">Comments</Label>
            <Input type="textarea" name="comments" id="id_comments" />
          </FormGroup>
          <Button>Submit Changes</Button>
        </Form>
      </Container>
    );
  }
}
