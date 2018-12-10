import React, { Component } from 'react';
import { Redirect } from 'react-router';

class ShopSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLink: false,
    }
  };

  shopClicker = () => {
    this.setState({
      toLink: true
    });
    window.scrollTo(0, 0);
  };

  render() {
    if (this.state.toLink === true) {
      return <Redirect push to={this.props.loc} />
    }

    return (
      <div className='shopSection' onClick={this.shopClicker}>
        <div className='shopSectionImageContainer'>
          <img className='shopSectionImage' src={this.props.image} />
        </div>
        <h3 className='shopSectionTitle'>{this.props.title}</h3>
        <p className='shopSectionText'>{this.props.text}</p>
        <div className='shopSectionLinkContainer'>
          <p className='shopSectionLink'>{this.props.linkText}</p>
        </div>
      </div>
    );
  };
};

export default ShopSection;
