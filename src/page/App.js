import React from 'react';
import { useDispatch } from 'react-redux';
import * as _type from '../store/action';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

const Login = React.lazy(() => import('./Login'))

function App() {
  const dispatch = useDispatch();
  dispatch({ type:_type.LOAD_SESSION, payload:'login' })

  return (
    <>
      <Switch>

        <Route exact path='/login' render={() => <Login/>}/>
        <Redirect from='*' to='/login'/>
      
      </Switch>
    </>
  )
  
}

export default withRouter(App)