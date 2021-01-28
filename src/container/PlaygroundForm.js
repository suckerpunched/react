import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as _type from '../store/action';

import { Flex, Box } from 'rebass';
import {
  Label,
  Input,
} from '@rebass/forms'

import { Modal, Button, Text, Form } from '../component';

export default function PlaygroundForm(props) {
  const dispatch = useDispatch();

  const [ modalShow, setModalShow ] = useState(false);

  const userFirstName = useSelector(state => state.playground.userFirstName);
  const userLastName = useSelector(state => state.playground.userLastName);

  return (
    <>
      <Button ml={2} mt={2} mr={1} onClick={() => { 
        dispatch({ type:_type.LOAD_SESSION, payload:'playground' })
        setModalShow(true)
      }}>show edit modal</Button>

      <Button mt={2} onClick={() => dispatch({ type:_type.CLEAR_SESSION, payload:'playground' })}>clear session</Button>

      <Modal show={modalShow} backdrop_clicked={() => {
        dispatch({ type:_type.SAVE_SESSION, payload:'playground' })
        setModalShow(false)
      }}>

        <Form 
          as='form' 
          onSubmit={data => {
            var firstName = data.get('firstName');
            var lastName = data.get('lastName');

            if (firstName && lastName) {
              dispatch({ type:_type.SET_USER_FIRST_NAME, payload: firstName });
              dispatch({ type:_type.SET_USER_LAST_NAME, payload: lastName });

              dispatch({ type:_type.SAVE_SESSION, payload:'playground' })
              setModalShow(false)
            } 
          }}
        >
          <Flex>

            <Box mr='auto'>
              <Text fontSize={[ 3, 5, 6 ]}>Form</Text>
              <Text fontSize={[ 1, 2, 3 ]}>In a Modal</Text>
            </Box>
          
            <Box p={1} fontSize={[1]}>
              <Button>Save</Button>
            </Box>
          
          </Flex>

          <Flex flexWrap='wrap'>

            <Box fontSize={[1, 2, 3]} mt={2}>
              <Label htmlFor='name'>First Name</Label>
              <Input
                id='firstName'
                name='firstName'
                defaultValue={userFirstName}
              />
            </Box>

            <Box fontSize={[1, 2, 3]} mt={2}>
              <Label htmlFor='name'>Last Name</Label>
              <Input
                id='lastName'
                name='lastName'
                defaultValue={userLastName}
              />
            </Box>

          </Flex>
        </Form>
      </Modal>
    </>
  )
}
