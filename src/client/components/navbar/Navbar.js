import React from 'react';

import Navlink from './navlinks/Navlink';
import Menu from './menu/Menu';
import downArrow from '../../images/downarrow.svg';

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <div className='linksContainer'>
        <div className='links'>
          <li className='shopMenuContainer'>
            <Navlink label='Home' linkTo='/' />
          </li>
          <li className='shopMenuContainer'>
            <Navlink label='About' linkTo='/about' />
          </li>
          <li className='shopMenuContainer'>
            <Navlink label='Blog' linkTo='/blog' />
          </li>
          <li className='shopMenuContainer'>
            <Navlink label='Shop' linkTo='/shop' />
            <img id='menuArrow' alt='menuarrow' src={downArrow} />
            <Menu />
          </li>
          <li className='shopMenuContainer'>
            <Navlink label='Gallery' linkTo='/gallery' />
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;