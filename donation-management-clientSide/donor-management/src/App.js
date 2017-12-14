import React, { Component } from 'react';
import './App.css';
// import Header from './components/Header';
import Home from './components/Home';
import DonorListView from './components/DonorListView';
// import DonorList from './components/DonorList';
import DonationList from './components/DonationList';

// import DonorDetail from './components/DonorDetail';

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
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/donor-list">Donor List</Link></li>
            <li><Link to="/donation-list">Donation List</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/donor-list" component={DonorListView}/>
          <Route path="/donation-list" component={DonationList}/>
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
