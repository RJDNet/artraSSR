import React, { Component } from 'react';
import classNames from 'classnames';

import Sidelink from './sidelinks/Sidelink';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bToggleOn: false,
      fixToggle: false
    };
  }

  handleClick = () => {
    this.setState({
      bToggleOn: !this.state.bToggleOn,
      fixToggle: !this.state.fixToggle
    });

    if (typeof document !== 'undefined') {
      const { bToggleOn } = this.state;
      const spinnerino = bToggleOn ? "visible" : "hidden";
      document.body.style.overflowY = spinnerino;
    }
  }

  render() {
    const { bToggleOn, fixToggle } = this.state;
    const bSidebar = bToggleOn ? "change" : "";
    const fixer = fixToggle ? "fixed" : "absolute";

    return (
      <div>
        <div className={classNames('sidebarContainer', { 'toggle': bToggleOn })}>

          <div className="linksContainer">
            <ul className='ulSidebarLinks'>
              <Sidelink linkTo='/' clicker={this.handleClick} label='HOME' />
              <Sidelink linkTo='/about' clicker={this.handleClick} label='ABOUT' />
              <Sidelink linkTo='/blog' clicker={this.handleClick} label='BLOG' />
              <Sidelink linkTo='/shop' clicker={this.handleClick} label='SHOP' />
              <Sidelink linkTo='/gallery' clicker={this.handleClick} label='GALLERY' />
            </ul>
          </div>
        </div>

        <div className='sideButtonContainer'>
          <div className={bSidebar} id='barButton' onClick={this.handleClick} style={{ position: fixer, zIndex: '2', cursor: 'pointer' }}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </div>
    );
  };
};

export default Sidebar;