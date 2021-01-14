import React from 'react';

import LeftSideNav from '../LeftSideNav/LeftSideNav';
import ToolBar from '../ToolBar/ToolBar';

import styles from './Layout.module.css';

export default function Layout(props) {

  return (
    <>
      <div><ToolBar/></div>
      <div><LeftSideNav/></div>
      <div className={styles.content}>{props.children}</div>
    </>
  )

}