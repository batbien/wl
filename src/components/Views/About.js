import React, { Fragment } from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs'

import classes from './About.module.css';
import viewsClasses from './Views.module.css';
import Envelope from '../hoc/Envelope';
import NavButton from '../UI/NavButton';
import glutamatfrei from '../../assets/images/glutamatfrei.jpg';
import vegan from '../../assets/images/vegan.png';

export default (props) => {
  return (
    <Fragment>
      <Envelope {...props}>
        <div className={classes.AboutContainer}>
            <p className={viewsClasses.Text}>White Lotus ist ein vietnamesisches Restaurant für Asia Food Freunde,
            Vegetarier und Veganer im Zentrum Darmstadt. In einer angenehmen Umgebung
             und freundlichen Persönlichkeit geht das White Lotus mit großer Wertschätzung
             auf ihre Kunden ein. Lernen Sie unsere vietnamesische Kultur, Service und Küche kennen.
             </p>
        </div>
      </Envelope>
      <ParallaxLayer speed={0.25} offset={props.offset} factor={props.factor}>
        <div className={[classes.ServiceContainer, classes.Vegan].join(' ')}>
          <img src={vegan} alt=""/>
          <div className={[viewsClasses.Text, classes.ServiceDescription].join(' ')}>Vegan & Vegetarisch: Damit
          unsere Kunden die Vietnamesische Küche genießen können, kochen wir
          unsere traditionellen Gerichte auch nach veganer/vegetarischer Rezeptur.</div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer speed={0.25} offset={props.offset} factor={props.factor}>
        <div className={[classes.ServiceContainer, classes.Glutamat].join(' ')}>
          <img src={glutamatfrei} alt=""/>
          <div className={[viewsClasses.Text, classes.ServiceDescription].join(' ')}>Wir kochen glutamatfrei für Sie</div>
        </div>
      </ParallaxLayer>
      <NavButton {...props} navBtnClass={classes.NavButton}/>
    </Fragment>

  );
}
