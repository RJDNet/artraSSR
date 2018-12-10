import React from 'react';
import { Link } from 'react-router-dom';

const Wide = () => {
  return (
    <div className='wideContainer'>
      <div className='wideAdvert'>
        <p className='wideHeader'>Great art at your fingertips!</p>
        <p className='wideText'>Buy from a variety of different styles of both physical and digital framed art</p>
        <Link exact='true' to='/shop' className='wideLink' style={{ textDecoration: 'underline' }}>SHOP</Link>
      </div>

      <div className='wideImage'>
        <div className='shadow' />
      </div>
    </div>
  );
};

export default Wide;
