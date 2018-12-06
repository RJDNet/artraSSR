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

          {/* <div></div> */}

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

        {/* <style jsx>
          {`
            .sidebarContainer {
              position: fixed; 
              top: 72px;
              left: 0px;
              right: 0px;
              bottom: 0px;
              z-index: 3; 

              background-color: white; 
              box-shadow: 5px -1px 10px rgba(0,0,0,0.18);
              overflow-x: hidden; 
           
              transition-timing-function: ease;

              width: 0%;
              overflow-y: hidden;
              transition-duration: 0.3s;
            }

            .sidebarContainer.toggle {
              width: 100%;
              overflow-y: scroll;
              transition-duration: 0.7s;
            }

            .linksContainer {
              width: 100%;
            }
            
            .sideButtonContainer {
              position: absolute;
              height: 72px;
              width: 72px; 
              top: 0px;
              left 0px;
            }

            #barButton {
              position: relative;
              left: 20px;
              top: 17px;
              height: 30px;
              width: 27px;
            }
            
            .bar1, .bar2, .bar3 {  
              position: relative;
              width: 24px;
              height: 2px;
              background-color: #3b4153;
              margin: 6px 0px;
              z-index: 4;
              border: 1px solid #3b4153;
              border-radius: 20px;
              transition: 0.25s;  
            }

            .change .bar1 {
              -webkit-transform: rotate(-45deg) translate(-6px, 5px);
              transform: rotate(-45deg) translate(-7px, 7px);
              background-color: #3b4153;
            }
            .change .bar2 {
              transition: 0.04s;
              opacity: 0;           
            }
            .change .bar3 {
              -webkit-transform: rotate(45deg) translate(-6px, -5px);
              transform: rotate(45deg) translate(-7px, -7px);
              background-color: #3b4153;
            }
        
            .sideNavLink {
              display: block;
              height: 40px;
              width: 260px;
              padding: 8px 8px 8px 32px;
              text-decoration: none;
              font-size: 25px;
              color: black;
            }
            
            .sideNavLink:hover {
              color: #f1f1f1;
            }

            ul {
              position: relative;
              display: block;
              width: 100%;
              padding: 0px;           
            }

            #break {
              position: relative;
              width: 100%;
              height: 1px;
              background-color: black;
            }

            .modal {
              position: fixed;
              height: 100%;
              width: 100%;
              z-index: 1;
              padding: 0px
              margin: 0px;
              background-color: rgba(0,0,0,0.2);         
            }

            @media only screen and (min-width: 800px) {
              #secondaryLinks {
                display: none;
              }
              .sideButtonContainer {
                display: none;
              }           
            }
        
            @media only screen and (min-width: 800px) {
              .sidebarContainer {
                display: none;
              }
            }
          `}
        </style> */}
      </div>

    );
  };
};

export default Sidebar;