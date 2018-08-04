import React, { Component } from 'react';
import './css/App.css';
import './css/solid.css';
import MapContainer from './Map';
import Menu from './Menu';
import Locations from './data/locations'

class App extends Component {

  componentWillMount() {
    this.fetchPlaces('51.9933217,-2.1561804');
    this.setState({
      locations: Locations
    })
  }

  fetchPlaces = (location) => {
    // FourSquare API keys
    const clientId = 'U40I5TMM0E2T0QDMVZBQ34P5KXXR3PR2ZAXXN2RMMNFU215O';
    const clientSecret = 'LMT2N0IIHG0BAOABOWJ5BGEWWU1F20YXQ2ROBJHLFQ4L1T13';
    // Location to search
    const ll = location;
    // Number of results to return
    const limit = 10;
    fetch('https://api.foursquare.com/v2/venues/search?&ll=' + ll + '&limit=' + limit + '&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20180323', {
      method: 'GET',
      dataType: 'jsonp',
    }).then(response => {
      return response.json();
    }).then(data => {
      this.setState({
        locations: data.response.venues
      })
    })
  }

  // Set state using markers array passed from MapContainer component
  markers = (arr) => {
    this.setState({
      markers: arr
    })
  }

  // Function called from menu item click
  handleClick = (location) => {
    // Get array of all marker instances
    const markers = this.state.markers;
    // Create variable to store the active marker
    let animateMarker;
    // Loop through markers array
    for (let marker of markers) {
      // Check to see if any match clicked item
      if(marker.title === location) {
        // If match store in activeMarker
        animateMarker = marker;
        break; // Exit loop after animateMarker set
      }
    }
    // Animate active marker
    animateMarker.setAnimation(window.google.maps.Animation.BOUNCE);
    // Stop animation after 1000ms
    setTimeout(() => {
      animateMarker.setAnimation(window.google.maps.Animation.NULL);
    }, 1000)
  }

  filter = (q) => {
    // Get array of all marker instances
    const markers = this.state.markers;
    // Check not empty query
    if(q.length > 0) {
      // Convert query to lowercase (search NOT case sensitive)
      q = q.toLowerCase();
      // Filter locations by search and set state
      this.setState(prevState => ({
        locations: prevState.locations.filter(location =>
          location.title.toLowerCase().indexOf(q) > -1
        )
      }))
      // Get array of markers to show and show
      let showMarkers = markers.filter(marker =>
        marker.title.toLowerCase().indexOf(q) > -1
      ).forEach(marker => {
        marker.setVisible(true);
      });
      // Get array of markers to hide and hide
      let hideMarkers = markers.filter(marker =>
        marker.title.toLowerCase().indexOf(q) < 0
      ).forEach(marker => {
        marker.setVisible(false);
      });
    // If empty...
    } else {
      // Set state to unfiltered list of locations
      this.setState({
        locations: Locations
      })
      // Show all markers
      markers.forEach(marker => {
        marker.setVisible(true);
      })
    }
  }

  render() {
    return (
      <div className="App">
        <MapContainer
          markers={this.markers}
          locations={this.state.locations} />
        <Menu
          onSearch={this.filter}
          locations={this.state.locations}
          handleClick={this.handleClick} />
      </div>
    );
  }

}

export default App;
