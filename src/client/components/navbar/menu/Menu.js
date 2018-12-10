import React from 'react';

import Menulink from '../menulinks/Menulink';

const Menu = () => {
  return (
    <div className='shopMenu'>
      <ul className='ulShopMenu'>
        <Menulink label='Drawing' linkTo='/drawing' />
        <Menulink label='Painting' linkTo='/painting' />
        <Menulink label='Digital' linkTo='/digital' />
        <Menulink label='Photography' linkTo='/photography' />
      </ul>
    </div>
  );
};

export default Menu;
