import React from 'react';

import classes from './Impressum.module.css';
export default ({handleButtonClick}) => {

  return(
    <div className={classes.ImpressumContainer}>
      <div><i class='fas fa-times' onClick={handleButtonClick}></i></div>
      <h1>Impressum</h1>
      <h2>WHITE LOTUS</h2>
      <h3>MIMI NGUYET ARNOLD</h3>
      <p>Adelungstraße 13<br/>
          64283 Darmstadt<br/>
          Tel.: 06151 6602720<br/>
          E-mail: m.arnold@whitelotus-darmstadt.de<br/><br/>
          Betriebsnummer: 94532287 <br/> </p>
      <p className={classes.Developer}>[Web-Entwicklung]<br/>
      <a href="https://tabneib.github.io">tabneib</a><br/><br/>[Bilder]<br/>
      <a href="mailto:nvphuong217@gmail.com">Nguyen Phuong</a></p>

      <button onClick={handleButtonClick}>Schließen</button>
    </div>
  );
}
