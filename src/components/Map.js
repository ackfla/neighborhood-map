import React, { Component } from 'react';
import {Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import MapStyles from '../data/map-styles';

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {
      address: []
    }
  };

  constructor(props) {
    super(props);
    this.map = React.createRef();
  }

  // Generate markers
  markersInit(places) {
    if (!places) {
      return
    }
    // Get map instance from map ref
    const map = this.map.current.map;
    // Create empty array to store markers
    let markers = [];
    // Loop of location data
    for (let i = 0; i < places.length; i++) {
      // For each location create a marker instance
      let marker = new this.props.google.maps.Marker({
        position: places[i].location,
        map: map,
        title: places[i].name,
        icon: {
          url: './cross.png',
          size: new this.props.google.maps.Size(64, 64),
          anchor: new this.props.google.maps.Point(32, 32)
        },
        id: places[i].id,
        address: places[i].location.formattedAddress
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

  fetchPlaces = () => {
    // FourSquare API keys
    const clientId = 'U40I5TMM0E2T0QDMVZBQ34P5KXXR3PR2ZAXXN2RMMNFU215O';
    const clientSecret = 'LMT2N0IIHG0BAOABOWJ5BGEWWU1F20YXQ2ROBJHLFQ4L1T13';
    // Location to search
    const ll = '51.9915247,-2.1579078';
    // Number of results to return
    const limit = 10;
    fetch('https://api.foursquare.com/v2/venues/search?&ll=' + ll + '&limit=' + limit + '&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20180323', {
      method: 'GET',
      dataType: 'jsonp',
    }).then(response => {
      if(response.ok) {
        return response.json();
      }
    }).then(data => {
      this.markersInit(data.response.venues);
      this.props.fetchedLocations(data.response.venues);
    }).catch(function(error) {
      alert('There has been a problem gathering place data with the FourSquare API request, please try again later');
    });
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
        onReady={this.fetchPlaces}
        styles={MapStyles}
        google={this.props.google}
        zoom={17}
        initialCenter={{
          lat: 51.9915247,
          lng: -2.1579078
        }}>
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div className="info-window">
                <h1>{this.state.activeMarker.title}</h1>
                {this.state.activeMarker.address.map((line) => (
                  <p key={this.state.activeMarker.id}>{line}</p>
                ))}
              </div>
          </InfoWindow>
        </Map>
    );
  }

}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAX3QNOQUtsGhe0cQyUzxN1wfwb3WHLB3o')
})(MapContainer)
