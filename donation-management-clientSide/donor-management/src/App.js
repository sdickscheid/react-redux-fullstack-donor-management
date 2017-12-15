import React, { Component } from 'react';
import './App.css';
import TopNavBar from './components/TopNavBar';
import Home from './components/Home';
import DonorListView from './components/DonorListView';
import DonationList from './components/GiftList';
import CreateNewDonor from './containers/CreateNewDonor';
import EditDonorForm from './containers/EditDonorForm';
import CreateNewGift from './containers/CreateNewGift';
import EditGiftForm from './containers/EditGiftForm';

import { connect } from 'react-redux';
import { getAllDonors } from './actions/action_donors';
import { bindActionCreators } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {
  componentWillMount() {
    this.props.getAllDonors();
  }

  render () {
    return (
      <Router>
        <div>
          <TopNavBar />
    
          <Route exact path="/" component={Home}/>
          <Route path="/donor-list" component={DonorListView}/>
          <Route path="/donation-list" component={DonationList}/>
          <Route path="/create-new-donor" component={CreateNewDonor}/>
          <Route path="/edit-donor" component={EditDonorForm}/>
          <Route path="/create-new-gift" component={CreateNewGift}/>
          <Route path="/edit-gift" component={EditGiftForm}/>
        </div>
      </Router>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllDonors: bindActionCreators(getAllDonors, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(App);
