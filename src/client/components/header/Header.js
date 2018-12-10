import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/mainlogo3.png';
import logosmall from '../../images/mainlogosmall.png';
import bag from '../../images/shopping-cart.png';

const Header = () => {

  return (
    <div className='headerContainer'>

      <div className="blockerLeft"></div>

      <div className='logoContainer'>
        <Link id='mainLogoLink' exact='true' to="/"><img className='mainLogo' alt='' src={logo} /></Link>
      </div>
      <div className='smallLogoContainer'>
        <Link id='smallLogoLink' exact='true' to="/"><img className='mainLogoSmall' alt='' src={logosmall} /></Link>
      </div>

      <div className="blockerRight">
        <div className="snipcart-summary">
          <a href='#' className='snipcart-checkout'>
            <img className='shopIcon' alt='' src={bag} />
            <span className="snipcart-total-price"></span>
            <span className="snipcart-total-items"></span>
          </a>
        </div>
      </div>
    </div >
  );
};

export default Header;
