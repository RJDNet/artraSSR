import React, { Component } from 'react';

class Special extends Component {
  constructor() {
    super()
    this.state = {
      hide: true
    };
  };

  toggleHider = () => {
    this.setState({
      hide: false
    });
  };

  render() {
    const { hide } = this.state;
    const hider = hide ? '110px' : '0px';

    return (
      <div className='specialContainer' style={{ height: hider }}>
        <div className='specialBut' onClick={this.toggleHider}>x</div>
        <div className='special'>
          <p className='specialText'>New digital art works in store now!</p>
        </div>
      </div>
    );
  };
};

export default Special;
