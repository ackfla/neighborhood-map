import React, { Component } from 'react';

class Menu extends Component {

  state = {
    query: ''
  }

  updateQuery = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <nav>
        <input
          type='text'
          placeholder='Filter by location'
          value={this.state.query}
          onChange={this.updateQuery}
        />
        <ul>
          {this.props.locations.map((location) => (
            <li
              onClick={() => this.props.handleClick(location.title)}
              key={location.title} >
            {location.title}
            </li>
          ))}
        </ul>
      </nav>
    );
  }

}

export default Menu;
