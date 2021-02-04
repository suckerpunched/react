/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box as RebassBox } from "rebass";

// eslint-disable-next-line
import React, { Component } from "react";

import Backdrop from "../Backdrop/Backdrop";

import styles from "./Modal.module.css";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return ( nextProps.show !== this.props.show || nextProps.children !== this.props.children );
  }

  render() {
    return (
      <div style={{ overflow:"hidden" }}>
        <Backdrop show={this.props.show} clicked={this.props.backdrop_clicked} />
        <RebassBox
          sx={{
            borderRadius: 'modal_border_radius'
          }}
          fontSize={[3, 5, 7]}
          fontWeight="bold"
          bg="modal_background"
          p={4}
          className={styles.mainDiv}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            display: this.props.show ? "block" : "none",
          }}
          {...this.props}
        >
          {this.props.children}
        </RebassBox>
      </div>
    );
  }
}

export default Modal;
