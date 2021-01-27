import React, { useState } from 'react';
import { useColorMode } from 'theme-ui'
import { useDispatch, useSelector } from 'react-redux';
import * as _type from '../store/action';

import { Flex, Box } from 'rebass';

import { Text, Modal, Switch, Button } from '../component';

export default function Playground(props) {
  const dispatch = useDispatch();
  
  // eslint-disable-next-line
  const [ mode, setMode ] = useColorMode()
  const [ modalShow, setModalShow ] = useState(false);

  const userFirstName = useSelector(state => state.playground.userFirstName);
  const userLastName = useSelector(state => state.playground.userLastName);
  const userCounter = useSelector(state => state.playground.userCounter);

  return (
    <>
      <Button mt={2} mr={1} onClick={() => { 
        dispatch({ type:_type.LOAD_SESSION, payload:'playground' })
        setModalShow(true)
      }}>show modal</Button>

      <Button onClick={() => dispatch({ type:_type.CLEAR_SESSION, payload:'playground' })}>clear session</Button>

      <Modal show={modalShow} backdrop_clicked={() => {
        dispatch({ type:_type.SAVE_SESSION, payload:'playground' })
        setModalShow(false)
      }}>
        <Flex>

          <Box mr='auto'>
            <Text fontSize={[ 3, 5, 7 ]}>Playground</Text>
            <Text fontSize={[ 1, 3, 5 ]}>Super Awesome Playground</Text>

            <hr/>

            <Text sx={{ color:'secondary' }} fontSize={[ 1, 2, 3 ]}>{userFirstName}</Text>
            <Text sx={{ color:'secondary' }} fontSize={[ 1, 2, 3 ]}>{userLastName}</Text>
            <Text sx={{ color:'secondary' }} fontSize={[ 1, 2, 3 ]}>{userCounter}</Text>

            <hr/>

            <Button mr={1} p={1} fontSize={[1]} onClick={() => dispatch({ type:_type.SET_USER_FIRST_NAME, payload:'sucker' })}>first</Button>
            <Button mr={1} p={1} fontSize={[1]} onClick={() => dispatch({ type:_type.SET_USER_LAST_NAME, payload:'punched' })}>last</Button>
            <Button mr={1} p={1} fontSize={[1]} onClick={() => dispatch({ type:_type.INCR_USER_COUNTER })}>+</Button>
          </Box>

          <Box>
            <Switch onClick={(checked)=> checked ? setMode('default') : setMode('alt_mode')}/>
          </Box>

        </Flex>
      
      </Modal>
    </>
  )
}
