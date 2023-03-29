import React from 'react';
import  LogoAnimated  from '../assets/images/logo-animated.gif';

const Loader = () => {
  return (
    <div className='loader'>
      <img
        src={LogoAnimated}
        alt='apple loader'
      />
    </div>
  );
};

export default Loader;
