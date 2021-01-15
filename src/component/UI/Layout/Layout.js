import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LeftSideNav from '../LeftSideNav/LeftSideNav';
import ToolBar from '../ToolBar/ToolBar';

export default function Layout(props) {
  const [leftSideNavVisible, setLeftSideNavVisible] = useState(false);

  return (
    <>
      <div><ToolBar/></div>

      <LeftSideNav show={leftSideNavVisible} close={() => setLeftSideNavVisible(false)}>
        <Link to={'/home'}>home</Link>
        <Link to={'/userpage'}> userpage</Link>
        <Link to={'/notuserpage'}> notuserpage</Link>
      </LeftSideNav>
      
      <div>{props.children}</div>
      
      <button onClick={() => setLeftSideNavVisible(true)}>show leftsidenav</button>
    </>
  )

}