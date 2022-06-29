import React from 'react';

const Rating = (props) => {
  let stars = Math.round(props.children);
  let black = '★'.repeat(stars);
  let white = '☆'.repeat(5 - stars);
  return (
    <div>
      <p>
        Review: {black}
        {white}
      </p>
    </div>
  );
};

export default Rating;
