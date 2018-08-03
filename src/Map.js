import React, { Component } from 'react';
import {Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.map = React.createRef();
  }

  // Generate markers
  markersInit() {
    // Get map instance from map ref
    const map = this.map.current.map;
    //Get list of locations from props
    const locations = this.props.locations;
    // Loop of location data
    for (let i = 0; i < locations.length; i++) {
      // For each location create a marker instance
      let marker = new this.props.google.maps.Marker({
        position: locations[i].location,
        map: map,
        title: locations[i].title,
        id: i  // unique id
      });
    }
  }

  componentDidMount() {
    // Create all markers on component mount
    this.markersInit();
  }

  render() {
    return (
      <Map
        ref={this.map}
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
