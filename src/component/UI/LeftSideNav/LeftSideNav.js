import React, { Component } from 'react';
import { Box } from 'rebass';

import Backdrop from '../Backdrop/Backdrop';

import styles from './LeftSideNav.module.css';

class LeftSideNav extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render() {
    return (
      <>
        <Backdrop show={this.props.show} clicked={this.props.close} />
        
        <Box
          sx={{
            p: 3,
            flexGrow: 1,
            flexBasis: 300,
          }}
          className={styles.mainDiv}
          style={{ 
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            display: this.props.show ? 'block' : 'none'
          }}
        >
          {this.props.children}
        </Box>
      </>
    )
  }
}

export default LeftSideNav;