import React, { Component } from 'react';
import "./Modal.css";

export class Modal extends Component {

componentDidMount () {
  window.addEventListener("keydown",  this.handleKeyDown)
}


componentWillUnmount () {
  window.removeEventListener("keydown",  this.handleKeyDown)
}


handleKeyDown = (e) => {
 if(e.code === "Escape") {
   this.props.openModal()
 }
}


  handleClickOverlay = e => {
    if (e.currentTarget === e.target) {
      this.props.openModal();
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleClickOverlay}>
        <div className="Modal">
          <img src={this.props.modalImg} alt="" />
        </div>
      </div>
    );
  }
};
