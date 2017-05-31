import React, { Component } from 'react';
import logo from './Hitman.png';
import './App.css';
import Player from './Player';
import artwork from './casette.jpg'

let track = {
  name: "Anachronism",
  artist: "Hitman",
  album: "Hitman Project",
  year: 2017,
  artwork: artwork,
  duration: 230,
  source: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3"
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          <Player track={track}/>
        </p>
      </div>
    );
  }
}

export default App;
