import React, { Fragment } from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs'

import classes from './Envelope.module.css';
import patternBG from '../../assets/images/pattern-bg.jpg';

export const colors = { BRIGHT: 'BRIGHT', DARK: 'DARK', BRIGHTER: 'BRIGHTER', DARKER: 'DARKER' };
export default ({
  color = colors.DARK,
  foldLeft = true,
  foldDegree,
  offset,
  idx,
  factor,
  pull = 0,
  pullBg = patternBG,
  navBtn,
  title,
  handleNavBtnClick,
  children
}) => {
  let contentClasses;
  let leftClippath,
    rightClippath;

  switch (color) {
    case colors.BRIGHT:
      contentClasses = [classes.Content, classes.Bright].join(' ');
      break;
    case colors.DARK:
      contentClasses = [classes.Content, classes.Dark].join(' ');
      break;
    case colors.BRIGHTER:
      contentClasses = [classes.Content, classes.Brighter].join(' ');
      break;
    case colors.DARKER:
      contentClasses = [classes.Content, classes.Darker].join(' ');
      break;
    default:
      throw new Error('Unknown color');
  }

  if (foldDegree && (foldDegree.length !== 2 ||
      !Number.isInteger(foldDegree[0]) || !Number.isInteger(foldDegree[1]) ||
      foldDegree[0] > 100 || foldDegree[0] < 0 ||
      foldDegree[1] > 100 || foldDegree[1] < 0)) {
    throw new Error('foldDegree must be an integer percentage');
  } else if (!foldDegree)
    foldLeft ? foldDegree = [2, 7] : foldDegree = [7, 2];

  leftClippath = `polygon(0 0, 100% ${foldDegree[0]}%, 100% 100%, 0% 100%)`;
  rightClippath = `polygon(0 ${foldDegree[1]}%, 100% 0, 100% 67%, 0 67%)`;

  return (
    <Fragment>

        <ParallaxLayer
          className={classes.EnvelopeTop}
          style={foldLeft ?
            {'zIndex': `${idx}*5+100`,
             'clipPath': rightClippath,
             'background': `url(${pullBg})`} :
            {'zIndex': `${idx}*5+101`,
            'clipPath': leftClippath,
            'background': `url(${pullBg})`}}
          speed={-0.1}
          offset={offset - pull}
          factor={factor * 6}>
          <h1>{title}</h1>
        </ParallaxLayer>

        <ParallaxLayer
          className={contentClasses}
          style={foldLeft ?
            {'zIndex': `${idx}*5+101`,
             'clipPath': leftClippath} :
            {'zIndex': `${idx}*5+100`,
             'clipPath': rightClippath}}
          speed={0.4}
          offset={offset}
          factor={factor * 6}>
          {children}
        </ParallaxLayer>
        {navBtn ? navBtn : null}
    </Fragment>
  );
};
