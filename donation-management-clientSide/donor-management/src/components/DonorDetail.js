import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';

const DonorDetail = ({selectedDonor}) => {
  // console.log('Donor Detail-Selected', selectedDonor);

  return (

    <div className="donor-details-container">
      <div className="donor-details-section">
        <h5 className="table-donor-info-title">Donor Information</h5>
        <Table className="donor-detail-table">
          <thead className="donor-table-header-main">
            <tr>
              <th className="donor-table-thead1">Description</th>
              <th className="donor-table-thead2">Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="donor-col-scope" scope="row">Donor ID: </th>
              <td className="donor-table-data">{selectedDonor ? selectedDonor.id : null}</td>
            </tr>
            <tr>
              <th className="donor-col-scope" scope="row">Name: </th>
              <td>{selectedDonor ? selectedDonor.name : null}</td>
            </tr>
            <tr>
              <th className="donor-col-scope" scope="row">Program Interests: </th>
              <td>{selectedDonor ? selectedDonor.program_interests: null}</td>
            </tr>
            <tr>
              <th className="donor-col-scope" scope="row">Address 1: </th>
              <td>{selectedDonor ? selectedDonor.address_1 : null}</td>
            </tr>
            <tr>
              <th className="donor-col-scope" scope="row">Address 2: </th>
              <td>{selectedDonor ? selectedDonor.address_2 : null}</td>
            </tr>
            <tr>
              <th className="donor-col-scope" scope="row">City/Town: </th>
              <td>{selectedDonor ? selectedDonor.city_town: null}</td>
            </tr>
            <tr>
              <th className="donor-col-scope" scope="row">State: </th>
              <td>{selectedDonor ? selectedDonor.state: null}</td>
            </tr>
            <tr>
              <th className="donor-col-scope" scope="row">Zip Code: </th>
              <td>{selectedDonor ? selectedDonor.zip_code: null}</td>
            </tr>
            <tr>
              <th className="donor-col-scope" scope="row">Phone #: </th>
              <td>{selectedDonor ? selectedDonor.phone: null}</td>
            </tr>
            <tr>
              <th className="donor-col-scope" scope="row">Email: </th>
              <td>{selectedDonor ? selectedDonor.email: null}</td>
            </tr>
            <tr>
              <th className="donor-col-scope" scope="row">Comments: </th>
              <td>{selectedDonor ? selectedDonor.comments: null}</td>
            </tr>
          </tbody>
        </Table>
        <div className="btns-donor-detail-edit-remove">
          <Link
            className="btns-donor-detail btn btn-secondary"
            color="secondary"
            to={"/edit-donor"}
          >
              Edit Donor
          </Link>{' '}
          <Button className="btns-donor-detail" color="secondary">Remove Donor</Button>{' '}
        </div>
      </div>

      <div className="donor-gifts-section">
        <h5 className="table-donor-gift-title">Donor Donation History</h5>
        <Table className="donor-gift-table">
          <thead className="donor-gift-table-header">
            <tr>
              <th>Gift #</th>
              {/* <th>Donor Name</th> */}
              <th>Program</th>
              <th>Gift Amount</th>
              <th>Date</th>
              <th>Transaction Type</th>
              <th>Receipt Status</th>
              <th>Edit Gift</th>
            </tr>
          </thead>
          <tbody className="donor-gift-table-body">
            <tr>
              <th className="donor-col-scope" scope="row">{selectedDonor.gifts ? selectedDonor.gifts[0].id: null}</th>
              {/* <td>{selectedDonor ? selectedDonor.name: null}</td> */}
              <td>{selectedDonor.gifts ? selectedDonor.gifts[0].program: null}</td>
              <td>{selectedDonor.gifts ? selectedDonor.gifts[0].gift_amount: '-'}</td>
              <td>{selectedDonor.gifts ? selectedDonor.gifts[0].gift_date.slice(0,10): null}</td>
              <td>{selectedDonor.gifts ? selectedDonor.gifts[0].transaction_type: null}</td>
              <td>{selectedDonor.gifts ? selectedDonor.gifts[0].receipt_status: null}</td>
              <td><a href="#">Edit</a></td>
            </tr>
          </tbody>
        </Table>

      </div>
    </div>
  )
}


function mapStateToProps(state, props) {
  return {
    selectedDonor: state.selectedDonor
  }
}


export default connect(mapStateToProps, null)(DonorDetail);
