import React, { useState } from 'react';
import { useColorMode } from 'theme-ui'

import { Text, Modal, Switch } from '../../component';

export default function App(props) {
  // eslint-disable-next-line
  const [ mode, setMode ] = useColorMode()
  const [ modalShow, setModalShow ] = useState(true);

  return (
    <Modal show={modalShow} backdrop_clicked={() => setModalShow(false)}>
      <Text fontSize={[ 3, 5, 7 ]}>Header</Text>
      <Text fontSize={[ 1, 3, 5 ]}>SubTitle</Text>
      <Switch onClick={(checked)=> checked ? setMode('alt_mode') : setMode('default')}/>
    </Modal>
  )
}
