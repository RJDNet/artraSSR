import React from 'react';

import ShopSection from '../components/shopSections/Shopsection';

import physical from '../images/shopSections/drawing1.jpg';
import painting from '../images/shopSections/painting1.jpg';
import digital from '../images/shopSections/digital1.jpg';
import photographs from '../images/shopSections/photography2.jpg';

const ShopPage = () => {
  return (
    <div className='shopContainer'>
      <h1 className='shopPageTitle'>SHOP</h1>
      <p className='shopPageText'>We have a variety of products for different types of arts and crafts. If you would like to have a look at the different products available for a specific category, feel free to click one of the category's below and it will take you straight to the product page!</p>

      <div className='homeShopContainer'>
        <ShopSection
          title='Drawing'
          text='We have many different pens, pencils, pastils and others accessories for artistic needs!'
          image={physical}
          loc='/drawing'
          linkText='Buy Drawing Products'
        />
        <ShopSection
          title='Painting'
          text='Art created with paints, oils and many more including useful painting accessories!'
          image={painting}
          loc='/painting'
          linkText='Buy Painting Products'
        />
        <ShopSection
          title='Digital'
          text='We have many products for creating digital art such as tablets and other electronic goods!'
          image={digital}
          loc='/digital'
          linkText='Buy Digital Art Products'
        />
        <ShopSection
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
