/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import styles from './Backdrop.module.css'

export default function Backdrop (props) {
  return props.show ? (
    <div 
      sx={{
        backgroundColor:'backdrop'
      }}
      className={styles.mainDiv} 
      onClick={props.clicked}
    />
  ) : null
}