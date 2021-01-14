import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as _type from '../../store/action';

export default function UserPage() {

  const userFirstName = useSelector(state => state.userpage.userFirstName)
  const userLastName = useSelector(state => state.userpage.userLastName)
  const userCounter = useSelector(state => state.userpage.userCounter)

  const dispatch = useDispatch()

  return (
    <>
      <div>{userFirstName}</div>
      <div>{userLastName}</div>
      <div>{userCounter}</div>

      <button onClick={() => dispatch({ type:_type.SET_USER_FIRST_NAME, payload:'sucker' })}>first</button>
      <button onClick={() => dispatch({ type:_type.SET_USER_LAST_NAME, payload:'punched' })}>last</button>
      <button onClick={() => dispatch({ type:_type.INCR_USER_COUNTER })}>+</button>


      <button onClick={() => dispatch({ type:_type.CLEAR_SESSION, payload:'userpage' })}>clear session</button>
      <button onClick={() => dispatch({ type:_type.SAVE_SESSION, payload:'userpage' })}>save session</button>
      <button onClick={() => dispatch({ type:_type.LOAD_SESSION, payload:'userpage' })}>load session</button>
    </>
  )
  
}
