import React from 'react';

import classes from './Menu.module.css';
export default ({title, subTitle, imgPath, description, price, handleButtonClick}) => {

  return(
    <div className={classes.MenuContainer}>
      <div><i className='fas fa-times' onClick={handleButtonClick}></i></div>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <img src={imgPath} alt=""/>
      <p>{description}</p>
      <p>Preis: {price}</p>
      <button onClick={handleButtonClick}>Schließen</button>
    </div>
  );
}
