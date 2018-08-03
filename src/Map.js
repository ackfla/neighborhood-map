import React, { Component } from 'react';
import {Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import MapStyles from './data/map-styles';

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
  };

  constructor(props) {
    super(props);
    this.map = React.createRef();
  }

  componentDidMount() {
    // Create all markers on component mount
    this.markersInit();
  }

  // Generate markers
  markersInit() {
    // Get map instance from map ref
    const map = this.map.current.map;
    //Get list of locations from props
    const locations = this.props.locations;
    // Create empty array to store markers
    let markers = [];
    // Loop of location data
    for (let i = 0; i < locations.length; i++) {
      // For each location create a marker instance
      let marker = new this.props.google.maps.Marker({
        position: locations[i].location,
        map: map,
        title: locations[i].title,
        id: i  // unique id
      });
      // Add 'click' event listener to marker for opening infowindow
      marker.addListener('click', () => {
        this.onMarkerClick(marker);
      });
      // push to markers array
      markers.push(marker);
    }
    // Pass array of markers to parent component
    this.props.markers(markers);
  }

  onMarkerClick = (marker) => {
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  render() {
    return (
      <Map
        ref={this.map}
        styles={MapStyles}
        google={this.props.google}
        zoom={15}
        initialCenter={{
          lat: 51.9933217,
          lng: -2.1561804
        }}>
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.activeMarker.title}</h1>
              </div>
          </InfoWindow>
        </Map>
    );
  }

}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAX3QNOQUtsGhe0cQyUzxN1wfwb3WHLB3o')
})(MapContainer)
