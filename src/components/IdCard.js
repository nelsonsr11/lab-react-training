import React from 'react';

const IdCard = (props) => {
  return (
    <div className="id">
      <img src={props.picture}></img>
      <section>
        <p>
          <b>Last Name:</b>
          {props.lastName}
        </p>
        <p>
          <b>First Name:</b>
          {props.firstName}
        </p>
        <p>
          <b>Gender:</b>
          {props.gender}
        </p>
        <p>
          <b>Height:</b> {props.height}
        </p>
      </section>
    </div>
  );
};

export default IdCard;
