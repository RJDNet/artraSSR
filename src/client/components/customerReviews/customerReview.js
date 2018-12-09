import React from 'react';
import Slide from 'react-reveal/Slide';

const CustomerReview = props => {
  return (
    <Slide bottom duration={500} delay={0}>
      <div className='customerReviewContainer'>
        <h4 className='customerReviewTitle'>{props.title}</h4>
        <p className='customerReviewText'>{props.text}</p>
      </div>
    </Slide>
  );
};

export default CustomerReview;