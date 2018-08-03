import React, { Component } from 'react';
import {Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        initialCenter={{
          lat: 51.9933217,
          lng: -2.1561804
        }}/>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAX3QNOQUtsGhe0cQyUzxN1wfwb3WHLB3o')
})(MapContainer)
