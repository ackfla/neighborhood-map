import React, { Component } from 'react';
import './css/App.css';
import MapContainer from './Map';
import Locations from './data/locations'

class App extends Component {

  componentWillMount() {
    this.setState({
      locations: Locations
    })
  }

  render() {
    return (
      <div className="App">
        <MapContainer locations={this.state.locations} />
      </div>
    );
  }

}

export default App;
