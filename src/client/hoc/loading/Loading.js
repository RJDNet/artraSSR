import React from 'react';

const Loading = () => {
  return (
    <div className='loadingContainer'>
      <div className='lds-ring'><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

export default Loading;