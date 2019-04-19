import React, { Fragment } from 'react';

import classes from './Menus.module.css';
import Envelope from '../../hoc/Envelope';
import ImageHeap from '../../UI/ImageHeap';
import data from '../../../data';
import menuPdf from '../../../assets/menu-whitelotus-darmstadt.pdf';

export default (props) => {

  return (
    <Fragment>
      <Envelope {...props}>
        <div className={classes.MenusContainer}>
          <p>Unsere ausgewählte Menüs für Euch</p>
          <a href={menuPdf} download>Vollständige Menü herunterladen</a>
          <div className={classes.ImageHeapContainer}>
            <ImageHeap data={data.map(m => [m.thumbnailPath, m.title])}
              handleClick={props.handleImageClick}/>
          </div>
          <i className={`fas fa-chevron-down ${classes.NavButton}`}
            onClick={props.handleNavBtnClick}></i>
        </div>
      </Envelope>
    </Fragment>
  );
}
