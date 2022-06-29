import React from 'react';

const CreditCard = (props) => {
  console.log(props);
  const num = props.number.split(' ').splice(12, 16).join('');
  let year = props.expirationYear.toString().slice(-2);
  let month = props.expirationMonth;
  if (month < 10) {
    month = '0' + month;
  }
  return (
    <div style={{ background: props.bgColor, color: props.color }}>
      <p>{props.type}</p>
      <p>************{num}</p>
      <p>
        Expires {month}/{year} {props.bank}
      </p>
      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;
