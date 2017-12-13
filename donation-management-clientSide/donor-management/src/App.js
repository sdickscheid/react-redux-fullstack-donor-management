import React, { Component } from 'react';
import DonorList from './containers/donor_list';
import Header from './components/header';
import { connect } from 'react-redux';
import { getAllDonors } from './actions/action_donors';
import { bindActionCreators } from 'redux';



class App extends Component {
  componentWillMount() {
    this.props.getAllDonors();
  }

  render () {
    return (
      <div>
        <Header />
        <DonorList />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllDonors: bindActionCreators(getAllDonors, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(App);
