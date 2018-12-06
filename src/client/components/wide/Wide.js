import React from 'react';
import { Link } from 'react-router-dom';

import bgpic from '../../images/banner-pic.jpg';

const Wide = () => {
  return (
    <div className='wideContainer'>
      <div className='wideAdvert'>
        <p className='wideHeader'>Some kind of shop advert or services!</p>
        <p className='wideText'>Some kind of shop advert or services</p>
        <Link exact='true' to='/shop' className='wideLink' style={{ textDecoration: 'underline' }}>Link Here</Link>
      </div>

      <div className='wideImage'>
        <div className='shadow' />
      </div>

      {/* <style jsx>
        {`
          .wideContainer {
            max-height: 400px;
            width: 100%;
          }

          .wideAdvert {
            position: absolute;
            display: block;
            height: 300px;
            width: 300px;
            top: 40px;
            right: 120px;
            background-color: white;
          }

          .wideHeader {
            position: relative;
            display: block;
            width: 100%;
            height: 80px;
            padding-top: 40px;
            font-family: Poppins, sans-serif;
            font-weight: 700;
            font-size: 18px;
            text-align: center;
          }

          .wideText {
            position: relative;
            display: block;
            font-family: Poppins, sans-serif;
            font-weight: 400;
            font-size: 15px;
            padding: 0px;
            text-align: center;
          }

          .shadow {
            height: 400px;
            width: 100%;
            z-index: 120;
            background-color: rgba(0,0,0,0.3);
          }

          @media only screen and (max-width: 799px) {
            .wideAdvert {
              position: absolute;
              width: 285px;
              left: 0px;
              right: 0px;
              margin: auto
            }
          }
        `}
      </style> */}

      {/* <style jsx>
        {`
      .wideContainer {
        position: relative;
        width: 100%;
        min-height: 400px;        
        background-image: url(${bgpic}); 
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
      `}
      </style> */}
    </div>
  );
};

export default Wide;
