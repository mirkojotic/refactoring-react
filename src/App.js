import React, { Component } from 'react';
import './App.css';
import PeopleList from './components/people-list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PeopleList />
      </div>
    );
  }
}

export default App;
