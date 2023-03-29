import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    console.log(window.scrollX);
  };
  useEffect(() => {
    const toggleVisibility = () => {
      const currentScrollPos = window.pageYOffset;

      // Button is displayed after scrolling for 50 pixels
      if (currentScrollPos > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isVisible]);
  return (
    isVisible && (
      <button
        className='back-button'
        onClick={scrollTopHandler}>
        TOP
      </button>
    )
  );
};

export default ScrollToTop;
