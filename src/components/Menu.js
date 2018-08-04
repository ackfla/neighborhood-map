import React, { Component } from 'react';

class Menu extends Component {

  state = {
    query: ''
  }

  updateQuery = (event) => {
    this.setState({
      query: event.target.value
    })
    this.props.onSearch(event.target.value);
  }

  handleClick() {
    document.getElementById('nav').classList.toggle('open');
  }

  render() {
    return (
      <nav id='nav' className='toggle'>
        <span>
          <input
            tabindex='3'
            type='text'
            placeholder='Filter by location'
            value={this.state.query}
            onChange={this.updateQuery}
          />
        </span>
        <ul>
          {this.props.locations.map((location) => (
            <li
              key={location.id}
            >
            <button tabindex='4' onClick={() => this.props.handleClick(location.name)}>
              {location.name}
            </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

}

export default Menu;
