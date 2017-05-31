import React, { Component } from 'react';
import TrackInformation from './TrackInformation';
import Scrubber from './Scrubber';
import Controls from './Controls';
import Timestamps from './Timestamps';

export default class Player extends Component{
  constructor(props) {
    super(props)
    this.state = { playStatus: 'play', currentTime: 0 }
  }

  togglePlay() {
    console.log('clicked')
    let status = this.state.playStatus;
    let audio = document.getElementById('audio');
    if(status === 'play') {
      status = 'pause'; audio.play();
    } else {
      status = 'play'; audio.pause();
    }
    this.setState({ playStatus: status });
  }

  checkit() {
    alert();
  }

  render() {
    return (
      <div className="Player">
        <div className="Background" style={{'backgroundImage': 'url(' + this.props.track.artwork + ')'}}></div>
        <div className="Header"><div className="Title">Hitman Project</div></div>
        <div className="Artwork" style={{'backgroundImage': 'url(' + this.props.track.artwork + ')'}}></div>
        <TrackInformation track={this.props.track} />
        <Scrubber />
        <Controls isPlaying={this.state.playStatus} onClick={this.checkit} />
        <Timestamps duration={this.props.track.duration} currentTime={this.state.currentTime} />
        <audio id='audio'><source src={this.props.track.source} /></audio>
      </div>
    )
  }
}
