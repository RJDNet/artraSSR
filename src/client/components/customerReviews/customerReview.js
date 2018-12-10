import React from 'react';

const CustomerReview = props => {
  return (
    <div className='customerReviewContainer'>
      <p className='customerReviewText'>{props.text}</p>
      <p className='customerReviewer'>{props.reviewer}</p>
    </div>
  );
};

export default CustomerReview;