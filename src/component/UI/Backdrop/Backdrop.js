import React from 'react';

import styles from './Backdrop.module.css'

export default function Backdrop (props) {
  return props.show ? <div className={styles.mainDiv} onClick={props.clicked}></div> : null
}