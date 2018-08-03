import React, { Component } from 'react';
import './css/App.css';
import MapContainer from './Map';
import Menu from './Menu';
import Locations from './data/locations'

class App extends Component {

  componentWillMount() {
    this.setState({
      locations: Locations
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

  render() {
    return (
      <div className="App">
        <MapContainer
          markers={this.markers}
          locations={this.state.locations} />
        <Menu
          locations={this.state.locations}
          handleClick={this.handleClick} />
      </div>
    );
  }

}

export default App;
