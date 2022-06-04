
import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="navigation">
    {['home', 'information', 'work', 'about', 'skills', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="navigation-dot"
        style={active === item ? { backgroundColor: '#313BAC' } : {}}
      ></a>
    ))}
  </div>
);

export default NavigationDots;