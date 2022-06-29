import React from 'react';

const Random = (props) => {
  const random = Math.floor(
    props.min + Math.random() * (props.max - props.min)
  );
  return (
    <div>
      Random value between {props.min} and {props.max} is {random}
    </div>
  );
};

export default Random;
