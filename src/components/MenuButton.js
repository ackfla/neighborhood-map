import React, { Component } from 'react';

class MenuButton extends Component {

  handleClick() {
    let els = document.getElementsByClassName("toggle");
    for(let el of els) {
      el.classList.toggle('open');
    }
  }

  render() {
    return (
      <button
        tabindex='1'
        id='menu'
        className='toggle'
        onClick={this.handleClick}
      />
    );
  }

}

export default MenuButton;
