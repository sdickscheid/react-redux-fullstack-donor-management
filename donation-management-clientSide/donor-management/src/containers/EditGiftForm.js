import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

export default class EditGiftForm extends React.Component {
  render() {
    return (
      <Container>
        <h3 className="title-create-edit-form">Edit Gift Details</h3>
        <Form className="form-container">
          <FormGroup>
            <Label for="donor_id">Donor ID</Label>
            <Input type="text" name="donor_id" id="id_donor_id" />
          </FormGroup>
          {/* DropDown List for PROGRAM TYPE */}
          <FormGroup>
            <Label for="primary_interest">Primary Program Interests</Label>
            <Input type="text" name="primary_interest" id="id_primary_interest" />
          </FormGroup>

          <FormGroup>
            <Label for="gift_amount">Gift Amount</Label>
            <Input type="text" name="gift_amount" id="id_gift_amount" />
          </FormGroup>
          <FormGroup>
            <Label for="gift_date">Date of Gift</Label>
            <Input type="text" name="gift_date" id="id_gift_date" />
          </FormGroup>

          {/* Dropdown List for TRANSACTION TYPE */}
          <FormGroup>
            <Label for="city_town">City/Town</Label>
            <Input type="text" name="city_town" id="id_city_town" />
          </FormGroup>

          {/* Dropdown List for RECEIPT STATUS */}
          <FormGroup>
            <Label for="state">State</Label>
            <Input type="text" name="state" id="id_state" />
          </FormGroup>

          <Button className="btn-CreateNewDonor-submit">Submit Gift Changes</Button>
        </Form>
      </Container>
    );
  }
}
