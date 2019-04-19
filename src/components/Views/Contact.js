import React from 'react';

import classes from './Contact.module.css';
import Envelope from '../hoc/Envelope';

export default (props) => {
  return (
    <Envelope {...props}>
      <div className={classes.ContactContainer}>
        <div className={classes.ContactRow}>
          <div className={classes.ContactLabel}>Adresse:</div>
          <p>Adelungstraße 13, 64283 Darmstadt</p>
        </div>
        <div className={classes.ContactRow}>
          <div className={classes.ContactLabel}>Öffnungszeiten:</div>
          <ul>
            <li>Mo: Ruhetag</li>
            <li>Di-Fr: 12h → 22h</li>
            <li>Sa, So & Feiertage: 12.30h → 22h</li>
          </ul>
        </div>
        <div className={classes.ContactRow}>
          <div className={classes.ContactLabel}>Tel.:</div>
          <p>06151 6602720</p>
        </div>
        <div className={classes.ContactRow}>
          <div className={classes.ContactLabel}>E-mail:</div>
          <p>m.arnold@whitelotus-darmstadt.de</p></div>
      </div>

    </Envelope>

  );
}
