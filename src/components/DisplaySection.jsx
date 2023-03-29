import React from 'react';
import ScrollToTop from './ScrollToTop';

function DisplaySection({triggerPreview}) {
  return (
    <div className='display-section wrapper'>
      <h2 className='title'>New</h2>
      <p className='text'>Brilliant</p>
      <span className='description'>
        A display that's up to 2x brighter in the sun
      </span>
      <button className='button' onClick={triggerPreview}>Try me!</button>
      <ScrollToTop />
    </div>
  );
}

export default DisplaySection;
