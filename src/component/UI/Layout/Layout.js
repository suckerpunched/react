import React from 'react';

import LeftSideNav from '../LeftSideNav/LeftSideNav';
import ToolBar from '../ToolBar/ToolBar';

export default function Layout(props) {

  return (
    <>
      <div><ToolBar/></div>
      {/* <div><LeftSideNav/></div> */}
      <div>{props.children}</div>
    </>
  )

}