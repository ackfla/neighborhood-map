import React, { Component } from 'react';
import './css/App.css';
import MapContainer from './Map';
import Locations from './data/locations'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapContainer />
      </div>
    );
  }
}

export default App;
