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
      <nav id='nav'>
        <button
          id='menu'
          onClick={this.handleClick}
        />
        <span>
          <input
            type='text'
            placeholder='Filter by location'
            value={this.state.query}
            onChange={this.updateQuery}
          />
        </span>
        <ul>
          {this.props.locations.map((location) => (
            <li
              onClick={() => this.props.handleClick(location.title)}
              key={location.title}
            >
              {location.title}
            </li>
          ))}
        </ul>
      </nav>
    );
  }

}

export default Menu;
