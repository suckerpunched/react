import React from 'react';

import styles from './LeftSideNav.module.css';

export default function LeftSideNav(props) {

  return (
    <div className={styles.mainDiv}>
      <nav>
      
        <div>
          nav items
        </div>

        <div>
          nav footer
        </div>

      </nav>
    </div>
  )

}