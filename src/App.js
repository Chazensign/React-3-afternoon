import React, { Component } from 'react';
import './App.css';
import UserInfo from './components/UserInfo';

class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <header>Home</header>
        <UserInfo />
      </div>
    )
  }
}

export default App;
