import React from 'react';

import Special from '../components/special/Special';
import Wide from '../components/wide/Wide';
import ShopSection from '../components/shopSections/ShopSection';
import CustomerReview from '../components/customerReviews/customerReview';

import physical from '../images/shopSections/drawing1.jpg';
import digital from '../images/shopSections/painting1.jpg';
import accessories from '../images/shopSections/accessories1.jpg';
import photographs from '../images/shopSections/photography2.jpg';

const HomePage = () => (
  <div>
    <Special />
    <Wide />
    <div className='homeContentContainer'>
      <h1 className='homeTitle'>
        Find great works whether digital or handmade, photographs and art accessories from Artra.
      </h1>

      <div className='homeShopContainer'>
        <ShopSection
          title='Hand Art'
          text='Art created with Pen, Pencil, ink, paints, oils and more!'
          image={physical}
          loc='/physical'
          linkText='Buy Handmade Pieces'
        />
        <ShopSection
          title='Digital Art'
          text='We have digital art from a huge range of styles and themes!'
          image={digital}
          loc='/digital'
          linkText='Buy Digital Pieces'
        />
        <ShopSection
          title='Photography'
          text='High quality photographs of beautiful places and people!'
          image={photographs}
          loc='/photographs'
          linkText='Buy Photographs'
        />
        <ShopSection
          title='Accessories'
          text='We have many different art and photography accessories!'
          image={accessories}
          loc='/accessories'
          linkText='Buy Accessories'
        />
      </div>

      <div className='customerReviewsContainer'>
        <h2 className='customerReviewsTitle'>Customer Reviews</h2>

        <CustomerReview
          title='awdwa'
          text='awdwa dawdwad aw awd wa dwaddwaw dawdawd wadwawdd awddawawdwa wad  dawdawddw awdwadawdawd adawdawd wadwaw'
        />
        <CustomerReview
          title='awdwa'
          text='awdwa dawdwad aw awd wa dwaddwaw dawdawd wadwawdd awddawawdwa wad  dawdawddw awdwadawdawd adawdawd wadwaw'
        />
        <CustomerReview
          title='awdwa'
          text='awdwa dawdwad aw awd wa dwaddwaw dawdawd wadwawdd awddawawdwa wad  dawdawddw awdwadawdawd adawdawd wadwaw'
        />
        <CustomerReview
          title='awdwa'
          text='awdwa dawdwad aw awd wa dwaddwaw dawdawd wadwawdd awddawawdwa wad  dawdawddw awdwadawdawd adawdawd wadwaw'
        />
      </div>

    </div>
  </div>
);

export default HomePage;