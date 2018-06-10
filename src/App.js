import React, { Component } from 'react';
import './App.css';
import UserDetailsPage from './components/user-details-page'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserDetailsPage />
      </div>
    );
  }
}

export default App;
