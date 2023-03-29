import React from 'react';

const BuySection = ({handler}) => {
  return (
    <ul className='links'>
      <li>
        <button className='button'>Buy</button>
      </li>
      <li>
        <a onClick={handler}
          
          className='link'>
          Learn more
        </a>
      </li>
    </ul>
  );
};

export default BuySection;
