import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from "react";

const TopNavbar = () => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const slideTo = (index) => {
    setSliderPosition(index);
  };

  useEffect(() => {
    const containerWidth = containerRef.current.clientWidth + 100;
    const itemWidth = containerWidth / 5;
    sliderRef.current.style.transform = `translateX(${sliderPosition * itemWidth}px)`;
  }, [sliderPosition]);

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="w-11/12	">
        <div className="nav-container-top w-full" ref={containerRef}>
          {/* Slider (the line above the nav items) */}
          <div className="slidertop" ref={sliderRef}>
            <div className="slider-childs">
              <span className="child1"></span>
              <span className="child2"></span>
              <span className="child3"></span>
            </div>
          </div>

          <div className="flex justify-between text-center mx-3 w-full">
            <Link to="/">
              <div className="nav-item-button cursor-pointer" onClick={() => slideTo(0)}>
                <span>Home</span>
              </div>
            </Link>
            <Link to="/userprofile">
              <div className="nav-item-button cursor-pointer" onClick={() => slideTo(1)}>
                <span>Profile</span>
              </div>
            </Link>
            <div className="nav-item-button cursor-pointer" onClick={() => slideTo(2)}>
              <span>Connect</span>
            </div>
            <div className="nav-item-button cursor-pointer" onClick={() => slideTo(3)}>
              <span>Product</span>
            </div>
            <div className="nav-item-button cursor-pointer" onClick={() => slideTo(4)}>
              <span>Get to know</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
