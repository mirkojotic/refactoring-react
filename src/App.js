import React, { Component } from 'react';
import './App.css';
import UserDetailsPage from './components/user-details-page'
import API from './api'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserDetailsPage {...API} />
      </div>
    );
  }
}

export default App;
