import React from 'react';

import Special from '../components/special/Special';
import Wide from '../components/wide/Wide';
import ShopSection from '../components/shopSection/ShopSection';

import physical from '../images/shopSections/drawing1.jpg';
import digital from '../images/shopSections/painting1.jpg';
import accessories from '../images/shopSections/accessories1.jpg';
import photographs from '../images/shopSections/photography1.jpg';

const HomePage = () => (
  <div>
    <Special />
    <Wide />
    <div className='homeContentContainer'>
      <h1 className='homeTitle'>
        Find great works whether digital or physical, photographs and art accessories from ARTREEL.
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
          title='Photographs'
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

    </div>
  </div>
);

export default HomePage;