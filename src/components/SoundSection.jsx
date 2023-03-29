import React from 'react';
import BuySection from './BuySection';
import ItemDescription from './ItemDescription';

function SoundSection() {
  const learnMoreHandler = () => {
    const elem = document.querySelector('.display-section');
    console.log(elem)
    window.scrollTo({
      top: elem?.getBoundingClientRect().bottom,
      left:0,
      behavior: 'smooth'
    });
  };
  return (
    <div className='sound-section wrapper'>
      <div className='body'>
        <div className='sound-section-content content'>
          <h2 className='title'>New Sound System</h2>
          <p className='text'>Feel the base.</p>
          <ItemDescription />
          <BuySection handler={learnMoreHandler} />
        </div>
      </div>
    </div>
  );
}

export default SoundSection;
