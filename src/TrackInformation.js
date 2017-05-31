import React, { Component } from 'react';

export default class TrackInformation extends Component{
  render() {
    return (
      <div className="TrackInformation">
        <div className="Name">{this.props.track.name}</div>
        <div className="Artist">{this.props.track.artist}</div>
        <div className="Album">{this.props.track.album} ({this.props.track.year})</div>
      </div>
    )
  }
}
