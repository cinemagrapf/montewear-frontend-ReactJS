import React, { useState, useEffect, useRef } from 'react';
import './ProductCategories.scss';

const ProductCategories = () => {
  const [selected, setSelected] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({});
  const segmentRefs = useRef([]);

  const segments = [
    { id: 'mens', label: "MEN'S" },
    { id: 'womens', label: "WOMEN'S" },
    { id: 'kids', label: "KID'S" },
  ];

  useEffect(() => {
    const updateSlider = () => {
      const activeSegment = segmentRefs.current[selected];
      if (activeSegment) {
        setSliderStyle({
          width: `${activeSegment.offsetWidth}px`,
          transform: `translateX(${activeSegment.offsetLeft - 4}px)`,
        });
      }
    };

    updateSlider();
    window.addEventListener('resize', updateSlider);
    return () => window.removeEventListener('resize', updateSlider);
  }, [selected]);

  return (
    <div className="segmented-control">
      <div className="segmented-control__slider" style={sliderStyle} />
      {segments.map((segment, index) => (
        <button
          key={segment.id}
          ref={(el) => (segmentRefs.current[index] = el)}
          className={`segment ${selected === index ? 'active' : ''}`}
          onClick={() => setSelected(index)}>
          {segment.label}
        </button>
      ))}
    </div>
  );
};

export default ProductCategories;
