import React, { Component } from 'react';

class Menu extends Component {

  render() {
    return (
      <nav>
        <ul>
          {this.props.locations.map((location) => (
            <li key={location.title}>
            {location.title}
            </li>
          ))}
        </ul>
      </nav>
    );
  }

}

export default Menu;
