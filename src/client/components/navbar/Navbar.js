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

      {/* <style jsx>
        {`
            .navbarContainer {
              position: relative;
              display: block;
              height: 50px;
              background-color: rgb(239, 240, 245);;
              justify-content: center;
              box-sizing: border-box;
              border-top: 1px solid rgb(223, 224, 236);
              border-bottom: 1px solid rgb(223, 224, 236);
            }

            .linksContainer {
              position: relative;     
              display: block;
              height: 50px;
              width: 100%;
              justify-content: center;
            }

            .links {
              margin-left: 20px;
            }

            #menuArrow {
              position: relative;
              top: 2px;
              right: 7px;
              height: 13px;
              width: 13px;
            }

            .side {
              width: 140px;
              height: 50px;
            }

            span {
              position: relative;
              font-size: 18px;
              top: -3px;
            }

            ul {
              margin: 0px;
              padding: 0px;
            }

            li {
              display: inline-block;
              list-style-type: none;
              padding: 0px;
              margin: 0px;
            }

            #mainLink:hover {
              color: red;
              transition: ease-in 0.18s;
            }

            @media only screen and (max-width: 799px) {
              .navbarContainer {
                display: none;
              }
            }
          `}
      </style> */}
    </div>
  );
};

export default Navbar;