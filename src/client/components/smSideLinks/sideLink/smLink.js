import React from 'react';

const smLink = props => {
  return (
    <a href='/'>
      <div className='smLink' style={{ backgroundColor: props.color }}>
        <div className='smIconContainer'>
          <img className='smLinkBut' src={props.img} />
        </div>
        <div className='smTextContainer'>
          <span className='smLinkText'>{props.label}</span>
        </div>
      </div>
    </a>
  );
};

export default smLink;