import React, { Component } from 'react';

import Backdrop from '../Backdrop/Backdrop';

import styles from './Modal.module.css';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render() {
    return (
      <>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div className={styles.mainDiv} style={{ 
          transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
          display: this.props.show ? 'block' : 'none'
        }}>
          {this.props.children}
        </div>
      </>
    )
  }
}

export default Modal;