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

  render() {
    return (
      <div className="App">
        <MapContainer markers={this.markers} locations={this.state.locations} />
        <Menu locations={this.state.locations} />
      </div>
    );
  }

}

export default App;
