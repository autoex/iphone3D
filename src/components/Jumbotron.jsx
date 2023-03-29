import React from 'react';
import Iphone from '../assets/images/iphone-14.jpg';
import HoldingIphone from '../assets/images/iphone-hand.png';
import BuySection from './BuySection';
import ItemDescription from './ItemDescription';

function Jumbotron() {
  const learnMoreHandler = () => {
    const elem = document.querySelector('.sound-section');
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      left:0,
      behavior: 'smooth'
    });
  };
  return (
    <div className='jumbotron-section wrapper'>
      <h2 className='title'>New</h2>
      <img
        src={Iphone}
        alt='iPhone 14 Pro'
        className='logo'
      />
      <p className='text'>Big and bigger.</p>
      <ItemDescription />
      <BuySection handler={learnMoreHandler} />
      <img
        src={HoldingIphone}
        alt='iPhone'
        className='iphone-img'
      />
    </div>
  );
}

export default Jumbotron;
