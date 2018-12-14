import React, { Component } from 'react';
import { Redirect } from 'react-router';

// import Shopsection from './pageComponents/shopSections/Shopsection';

import physical from '../images/shopSections/drawing1.jpg';
import painting from '../images/shopSections/painting1.jpg';
import digital from '../images/shopSections/digital1.jpg';
import photographs from '../images/shopSections/photography2.jpg';

class Shopsection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLink: false,
    };
  }

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

const ShopPage = () => {
  return (
    <div className='shopContainer'>
      <h1 className='shopPageTitle'>SHOP</h1>
      <p className='shopPageText'>We have a variety of products for different types of arts and crafts. If you would like to have a look at the different products available for a specific category, feel free to click one of the category's below and it will take you straight to the product page!</p>

      <div className='homeShopContainer'>
        <Shopsection
          title='Drawing'
          text='We have many different pens, pencils, pastils and others accessories for artistic needs!'
          image={physical}
          loc='/drawing'
          linkText='Buy Drawing Products'
        />
        <Shopsection
          title='Painting'
          text='Art created with paints, oils and many more including useful painting accessories!'
          image={painting}
          loc='/painting'
          linkText='Buy Painting Products'
        />
        <Shopsection
          title='Digital'
          text='We have many products for creating digital art such as tablets and other electronic goods!'
          image={digital}
          loc='/digital'
          linkText='Buy Digital Art Products'
        />
        <Shopsection
          title='Photography'
          text='High quality photography products and accessories for pictures of beautiful places and people!'
          image={photographs}
          loc='/photography'
          linkText='Buy Photography Products'
        />
      </div>
    </div>
  );
};

export default ShopPage;
