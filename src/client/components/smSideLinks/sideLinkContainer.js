import React from 'react';
import SMLink from './sideLink/smLink';

import Twitter from '../../images/Twitter.png';
import Facebook from '../../images/Facebook.png';
import Google from '../../images/Google.png';
import Instagram from '../../images/Instagram.png';
import Youtube from '../../images/Youtube.png';

const smLinkContainer = () => {
  return (
    <div className='smLinkContainer'>
      <SMLink img={Twitter} label='Twitter' color='#5EA8D8' />
      <SMLink img={Facebook} label='Facebook' color='#3D5A93' />
      <SMLink img={Google} label='Google' color='#DB4C3C' />
      <SMLink img={Instagram} label='Instagram' color='#8E6258' />
      <SMLink img={Youtube} label='Youtube' color='#D32B27' />
    </div>
  );
};

export default smLinkContainer;
