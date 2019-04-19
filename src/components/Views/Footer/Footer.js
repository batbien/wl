import React, { Component } from 'react';

import classes from './Footer.module.css';

export default class Footer extends Component {

  state = { atBottom: false }

  componentDidMount() {
    // This is a hack because the react-spring api does not provide a
    // way to fire and listen to scroll event
    let prlx = document.getElementById('root')
      .children[0];
    // When the user scrolls the parallax close enough to bottom
    var dist = prlx.scrollHeight * (this.props.pages - 1.05);
    const initOrientation = window.orientation;
    var currentOrientation = window.orientation;
    prlx.addEventListener('scroll', event => {
      if (prlx.scrollTop >= dist && currentOrientation === initOrientation)
        this.setState({ atBottom: true });
      else if (this.state.atBottom)
        this.setState({ atBottom: false });
    });
    const checkOrientation = function() {
      if (window.orientation !== currentOrientation) {
        currentOrientation = window.orientation;
        // This does not work! Somehow the new calculated value is too big !
        // So I just disable showing the footer if the screen is rotated to avoid misfunctioning
        //dist = prlx.scrollHeight * (pages - 1.05);
      }
    };

    window.addEventListener("resize", checkOrientation, false);
  }

  render() {
    let footerClasses = [classes.Footer];
    if (this.state.atBottom)
      footerClasses.push(classes.Show);
    else
      footerClasses.push(classes.Hide);

    return (
      <div className={footerClasses.join(' ')}>
        <div className={classes.Circle}></div>
        <div className={classes.NavButton}>
          <i className='fas fa-chevron-up'
            onClick={this.props.handleNavBtnClick}></i>
        </div>
        <div className={classes.Copyright}>
          <p>Copyright © whitelotus-darmtadt.de 2019</p>
          <button onClick={this.props.openImpressum}>Impressum</button>
        </div>
      </div>
    );
  }
}
