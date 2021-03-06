import React from 'react';

import Twitter from '../../images/Twitter.png';
import Facebook from '../../images/Facebook.png';
import Google from '../../images/Google.png';
import Instagram from '../../images/Instagram.png';
import Youtube from '../../images/Youtube.png';

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='footerSectionContainer'>

        <div className='footer'>
          <ul className='ulFooter'>
            <li className='liFooterTitle'>About Artra</li>
            <a id='footerLink' href='/'><li className='liFooter'>About Us</li></a>
            <a id='footerLink' href='/'><li className='liFooter'>Blog</li></a>
            <a id='footerLink' href='/'><li className='liFooter'>Content</li></a>
            <a id='footerLink' href='/'><li className='liFooter'>Contact Us</li></a>
          </ul>
        </div>

        <div className='footer'>
          <ul className='ulFooter'>
            <li className='liFooterTitle'>Further Information</li>
            <a id='footerLink' href='/'><li className='liFooter'>Privacy Policy</li></a>
            <a id='footerLink' href='/'><li className='liFooter'>Terms & Conditions</li></a>
            <a id='footerLink' href='/'><li className='liFooter'>Site Map</li></a>
          </ul>
        </div>

        <div className='footer'>
          <ul className='ulFooter'>
            <li className='liFooterTitle'>Customer Services</li>
            <a id='footerLink' href='/'><li className='liFooter'>FAQ</li></a>
            <a id='footerLink' href='/'><li className='liFooter'>Delivery Options</li></a>
            <a id='footerLink' href='/'><li className='liFooter'>Returns Policy</li></a>
          </ul>
        </div>

        <div className='smFooter'>
          <ul className='ulFooter'>
            <li className='liFooterTitle'>Social Media</li>
            <div className='socialMediaButtonContainer'>
              <a href='/'><img id='smBut' src={Twitter} /></a>
              <a href='/'><img id='smBut' src={Facebook} /></a>
              <a href='/'><img id='smBut' src={Google} /></a>
              <a href='/'><img id='smBut' src={Youtube} /></a>
              <a href='/'><img id='smBut' src={Instagram} /></a>
            </div>
          </ul>
        </div>

        <div className='copyContainer'>
          <span className='copy'>©Artra Image Solutions</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
