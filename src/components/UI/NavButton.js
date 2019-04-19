import React from 'react';
import {ParallaxLayer} from 'react-spring/renderprops-addons.cjs';

export default ({ offset, speed, idx, navBtnUp, navBtnClass, handleNavBtnClick, zIdx }) => {
  let navBtnClasses = navBtnUp ? `fas fa-chevron-up ${navBtnClass}` :
      `fas fa-chevron-down ${navBtnClass}`;
  let zI = zIdx ? `${zIdx}` : `${idx}*5+101`;
  return (<ParallaxLayer speed={speed ? speed : -0.2} offset={offset} style={{zIndex: zI}}>
    <i className={navBtnClasses} onClick={handleNavBtnClick}
        style={{
          color: 'orange',
          fontSize: '4em',
          opacity: '0.45',
          padding: '0',
          margin: '0',
          position: 'absolute',
          bottom: '-20vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          cursor: 'pointer'
        }}></i>
  </ParallaxLayer>);
}
