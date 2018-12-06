import React from 'react';

import Menulink from '../menulinks/Menulink';

const Menu = () => {
  return (
    <div className='shopMenu'>
      <ul className='ulShopMenu'>
        <Menulink label='Home' linkTo='/' />
        <Menulink label='About' linkTo='/about' />
        <Menulink label='Blog' linkTo='/blog' />
        <Menulink label='Shop' linkTo='/shop' />
        <Menulink label='Gallery' linkTo='/gallery' />
      </ul>

      <style jsx>
        {`

          
          .ulShopMenu {
            padding: 20px;
            margin: 0px;
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  );
};

export default Menu;
