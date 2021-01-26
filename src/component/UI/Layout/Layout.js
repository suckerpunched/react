import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box } from 'rebass';

import LeftSideNav from '../LeftSideNav/LeftSideNav';
import ToolBar from '../ToolBar/ToolBar';

export default function Layout(props) {
  const [leftSideNavVisible, setLeftSideNavVisible] = useState(false);

  return (
    <>
      <ToolBar />
      <Flex
        sx={{
          flexWrap: 'wrap'
        }}
      >
        <LeftSideNav show={leftSideNavVisible} close={() => setLeftSideNavVisible(false)}>
          <Link to={'/userpage'} onClick={() => setLeftSideNavVisible(false)}> userpage</Link>
          <br/>
          <Link to={'/notuserpage'} onClick={() => setLeftSideNavVisible(false)}> notuserpage</Link>
        </LeftSideNav>

        <Box
          sx={{
            p: 3,
            flexGrow: 99999,
            flexBasis: 0,
            minWidth: 320
          }} 
          style={{backgroundColor:'#fff8e6', position:'fixed', width:'100%', height:'100%'}}
        >
          {props.children}
          <button onClick={() => setLeftSideNavVisible(true)}>show leftsidenav</button>
        </Box>
      
      </Flex>
    </>
  )

}