import React from 'react';
import {  } from 'reactstrap';

const Donor = (props) => {
  let { id, name, address_1, address_2, city_town, state, zip_code, phone, email, program_interests } = props.donor;
  return (
    <div>
      <ul>
        <li>Donor ID: {id}</li>
        <li>Donor Name: {name}</li>
        <li>Program Interests: {program_interests}</li>
        <li>Address 1: {address_1}</li>
        <li>Address 2: {address_2}</li>
        <li>City/Town: {city_town}</li>
        <li>State: {state}</li>
        <li>Zip: {zip_code}</li>
        <li>Phone #: {phone}</li>
        <li>Email: {email}</li>
      </ul>
    </div>
  )
}
export default Donor;
