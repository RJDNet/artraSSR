import React, { Component } from 'react';
import { Redirect } from 'react-router';

import Special from '../components/special/Special';
import Wide from '../components/wide/Wide';
import CustomerReview from '../components/customerReviews/customerReview';

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

const HomePage = () => (
  <div>
    <Special />
    <Wide />
    <div className='homeContentContainer'>
      <h1 className='homeTitle'>
        Find great works whether digital or handmade, photographs and art accessories from Artra.
      </h1>

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

      <div className='customerReviewsContainer'>
        <h2 className='customerReviewsTitle'>Customer Reviews</h2>

        <CustomerReview
          title='awdwa'
          text='awdwa dawdwad aw awd wa dwaddwaw dawdawd wadwawdd awddawawdwa wad dawdawddw awdwadawdawd adawdawd wadwawawd aw awdaw'
          reviewer='-Afesfs Egrdr'
        />
        <CustomerReview
          title='awdwa'
          text='awdwa dawdwad aw awd wa dwaddwaw dawdawd wadwawdd awddawawdwa wad dawdawddw awdwadawdawd adawdawd wadwawa wdawdawd adwdawdaw awdawdawd wadaw daad a awdaw dawd.'
          reviewer='-Gwdwa Rgrdr'
        />
        <CustomerReview
          title='awdwa'
          text='awdwa dawdwad aw awd wa dwaddwaw dawdawd wadwawdd awddawawdwa wad dawdawddw awd.'
          reviewer='-Rfesfs Egrdr'
        />
        <CustomerReview
          title='awdwa'
          text='awdwa dawdwad aw awd wa dwaddwaw dawdawd wadwawdd awddawawdwa wad dawdawddw awdwadawdawd adawdawd wadwaw. Hwdwad wadawd dwa dawdaw daw wdwadaww '
          reviewer='-Nfesfs Gyewgrdr'
        />
      </div>

    </div>
  </div>
);

export default HomePage;