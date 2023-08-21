import React, { Component } from 'react';
import "./Modal.css";

export class Modal extends Component {

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
