import React from 'react';

import Special from '../components/special/Special';
import Wide from '../components/wide/Wide';

const HomePage = () => (
  <div>
    <Special />
    <Wide />
    <div className='homeContentContainer'>Welcome to the Homepage!</div>

    {/* <style jsx>
      {`
        .homeContentContainer {
          width: 100%;
        }
      `}
    </style> */}
  </div>
);

export default HomePage;