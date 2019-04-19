import React, { Component } from "react";

import classes from "./Modal.module.css";

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.shown || nextProps.shown;
  }

  render() {
    var modalClasses = [];
    var containerClasses = [];
    modalClasses.push(classes.Modal);
    containerClasses.push(classes.Container)
    if (this.props.shown){
      modalClasses.push(classes.Shown);
      containerClasses.push(classes.Shown);
    }
    else{
      modalClasses.push(classes.Hidden);
      containerClasses.push(classes.Hidden);
    }

    return (
      <div className={containerClasses.join(" ")}
            onClick={ this.props.handleBackdropClick }>
        <div className={modalClasses.join(" ")} onClick={(event) =>
        {
          event.stopPropagation();
        }}>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Modal;
