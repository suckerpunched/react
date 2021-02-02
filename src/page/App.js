import React from 'react';
import { useDispatch } from 'react-redux';
import * as _type from '../store/action';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import LoginForm from '../container/LoginForm';

const Playground = React.lazy(() => import('../container/Playground/Playground'))
const PlaygroundModal = React.lazy(() => import('../container/Playground/PlaygroundModal'))
const PlaygroundForm = React.lazy(() => import('../container/Playground/PlaygroundForm'))

function App() {
  const dispatch = useDispatch();
  dispatch({ type:_type.LOAD_SESSION, payload:'login' })

  return (
    <>
      <Switch>

        <Route exact path='/login' render={(props) => <LoginForm/>}/>

        <Route exact path='/playground' render={(props) => <Playground {...props}/>}/>
        <Route exact path='/modal' render={(props) => <PlaygroundModal {...props}/>}/>
        <Route exact path='/form' render={(props) => <PlaygroundForm {...props}/>}/>
        
        <Redirect from='*' to='/login'/>
      
      </Switch>
    </>
  )
  
}

export default withRouter(App)