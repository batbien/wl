import React, { Fragment } from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs'

import classes from './Header.module.css';
import headerBg from '../../assets/images/header-bg.png';

export default (props) => {
  return (
    <Fragment>
      <ParallaxLayer speed={-0.2} offset={0} className={classes.Header}>
        <img className={classes.HeaderBg} src={headerBg} alt=''/>
      </ParallaxLayer>
      <ParallaxLayer speed={0.4} offset={0} className={classes.Header}>
        <div>
        <p className={classes.HeaderTitle}>
          White Lotus
        </p>
        <p className={classes.HeaderSubTitle}>
        Für Asia Food Freunde</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer speed={-0.7} offset={0}>
        <i className={`fas fa-chevron-down ${classes.NavButton}`}
          onClick={props.handleNavBtnClick}></i>
      </ParallaxLayer>
      <ParallaxLayer speed={-0.5} offset={0.65} factor={0.01}>
        <div className={classes.IconFB} onClick={() => {window.location='https://www.facebook.com/pages/White-Lotus/220356071325275';}}></div>
      </ParallaxLayer>

      <ParallaxLayer speed={0.8} offset={0.75} factor={0.01}>
        <div className={classes.IconInsta} onClick={() => {window.location='https://www.instagram.com/whitelotus.darmstadt/';}}></div>
      </ParallaxLayer>
    </Fragment>
  );
};
