import React, { Component } from 'react';
import logo from './Hitman.png';
import './App.css';
import ReactPlayer from 'react-player'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          <ReactPlayer controls={true} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
        </p>
      </div>
    );
  }
}

export default App;
