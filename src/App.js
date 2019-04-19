import React, { Fragment, Component } from 'react';
import { Parallax } from 'react-spring/renderprops-addons.cjs';

import './App.css';
import Header from './components/Views/Header';
import Menus from './components/Views/Menus/Menus';
import About from './components/Views/About';
import Contact from './components/Views/Contact';
import Footer from './components/Views/Footer/Footer';
import { colors } from './components/hoc/Envelope';
import patternBGyellow from './assets/images/pattern-bg-yellow.jpg';

import Modal from './components/UI/Modal/Modal';
import Menu from './components/Views/Menus/Menu';
import Impressum from './components/Views/Footer/Impressum';
import data from './data';

class App extends Component {

  state = {
    modalMenuDisplaying: false,
    menuContent: null,
    modalImpressumDisplaying: false
  }

  handleImageClick = (event, id) => {
    let menuContent = {
      title: data[id].title,
      subTitle: data[id].subTitle,
      imgPath: data[id].imgPath,
      description: data[id].description,
      price: data[id].price
    };
    let modalMenuDisplaying = true;
    this.setState({ menuContent, modalMenuDisplaying });
  }

  handleImpressumClick = (event) => {
      this.setState({ modalImpressumDisplaying: true});
  }

  handleBackdropClick = (event) => {
    this.setState({ modalImpressumDisplaying: false, modalMenuDisplaying: false });
  }

  render() {

    // Parallax stuffs cannot be configured using media queries so it must be done here
    let pages, menusOffset, menusPull, contactOffset, contactPull;
    if (Math.min(window.innerWidth, window.innerHeight) >= 640) {
      // Medium and large screens => we don't need long parallaxLayer
      pages = 5.1;
      menusOffset = 2.9;
      menusPull = 0.3;
      contactOffset = 4.1;
      contactPull = 0.2;
    } else {
      pages = 5.5;
      menusOffset = 3.3;
      menusPull = 0.1;
      contactOffset = 4.7;
      contactPull = 0.2;
    }
    return (
      <Fragment>
        <Parallax  ref={ref => (this.parallax = ref)} pages={pages}>
          <Header offset={0} factor={1} idx={0} handleNavBtnClick={() => this.parallax.scrollTo(1.5)}/>
          <About offset={1.7} factor={1} idx={1} color={colors.BRIGHT} pull={0.25}
          title="Über uns"  handleNavBtnClick={() => this.parallax.scrollTo(menusOffset - 0.1)}/>
          <Menus offset={menusOffset} factor={1} idx={2} color={colors.DARK} pull={menusPull}
              pullBg={patternBGyellow} foldLeft={false} title="Menüs"
              handleImageClick={this.handleImageClick}
              handleNavBtnClick={() => this.parallax.scrollTo(contactOffset - 0.01)}/>
          <Contact offset={contactOffset} factor={1} idx={3} color={colors.BRIGHT} pull={contactPull} title="Kontakt"/>
        </Parallax>
        <Footer handleNavBtnClick={() => this.parallax.scrollTo(0)} pages={pages} openImpressum={this.handleImpressumClick}/>
        <Modal shown={this.state.modalMenuDisplaying}
              handleBackdropClick={this.handleBackdropClick}>
                <Menu {...this.state.menuContent} handleButtonClick={this.handleBackdropClick}/>
        </Modal>
        <Modal shown={this.state.modalImpressumDisplaying}
              handleBackdropClick={this.handleBackdropClick}>
                <Impressum handleButtonClick={this.handleBackdropClick}/>
        </Modal>
      </Fragment>
    );
  }
}

export default App;
