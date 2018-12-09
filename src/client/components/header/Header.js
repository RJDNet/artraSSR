import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/smglogotrans2.png';
import bag from '../../images/shopping-cart.png';

const Header = () => {

  return (
    <div className='headerContainer'>

      <div className="blockerLeft"></div>

      <div className='logoContainer'>
        <Link id='logoLink' exact='true' to="/"><img className='mainLogo' alt='' src={logo} /></Link>
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

      {/* <style jsx>
        {`
        .headerContainer {
          position: relative;
          height: 72px;
          width: 100%;
          box-sizing: border-box;
        }

        .blockerLeft {
          position: absolute;
          display: inline-block;
          top: 0px;
          left: 0px;
          display: inline-block;
          height: 72px;
          width: 72px;
        }

        .blockerRight {
          position: absolute;
          top: 0px;
          right: 0px;
          height: 72px;
          width: 122px;
          text-decoration: none;
        }

        .logoContainer {
          position: relative;
          display: flex;
          height: 72px;
          width 100%
          justify-content: center;
          align-content: center;
        }

        .mainLogo {
          position: relative;
          display: block;
          height: 40px;
          width: 100px;
        }

        .snipcart-summary {
          top: 0px;
          right: 0px;
          height: 72px;
          width: 122px;
          text-decoration: none;
          transition: 0.2s;
        }

        .snipcart-summary:hover {
          background-color: #eaeaea;
        }

        .snipcart-checkout {
          position: relative;
          display: block;
          height: 72px;
          width: 122px;
        }

        .snipcart-total-items {
          position: absolute;
          top: 17px;
          left: 40px;
          color: black;
        }

        .snipcart-total-price {
          position: absolute;
          top: 35px;
          right: 20px;
          color: black;
        }

        .shopIcon {
          position: relative;
          top: 15px;
          left: 10px;
          height: 42px;
          width: 48px;
        }

        .sideHeaderContainer {
          position: absolute;
          display: flex;
          height: 72px;
          width: 144px;
          top: 0px;
          right: 140px;
        }

        .sideContainer {
          position: relative; 
          width: 72px;
          height: 72px;
        }

        .side {
          position: relative;
          top: 23px;
          text-align: center;
        }

        @media only screen and (max-width: 799px) {
          .headerContainer {
            border-bottom: 1px solid red;
          }

          .sideContainer {
          display: none; 
          }
        }

        @media only screen and (min-width: 800px) {
          .logoContainer {
            display: inline-block;
            width: 140px;
          }

          .blockerLeft {
            display: none;
          }

          .sideContainer {
            display: inline-block;
          }
        }
      `}
      </style> */}
    </div >
  );
};

export default Header;
