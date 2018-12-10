import React from 'react';

import aboutpic from '../images/aboutpic.jpg';

const AboutPage = () => {
  return (
    <div className='aboutPageContainer'>
      <p className='aboutTitle'>About Us</p>
      <div className='aboutSecondContainer'>
        <div className='leftAboutContainer'>
          <p className='aboutText'>
            Artra is a small company based in the UK. We started up in 2010 as a small team, a team with a passion for creative subjects. Since then we have expanded to be able to provide a wide variety of products based around art, photography and many other creative crafts.
          </p>
          <br />
          <br />
          <p className='aboutText'>
            We strive to provide only the highest quality products and follow the latest trends. We also like to be involved in various activies, conventions and like to keep up with the latest news in the industry!
          </p>
        </div>
        <div className='rightAboutContainer'>
          <img className='aboutImage' src={aboutpic} />
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
