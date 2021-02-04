import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

const Login = React.lazy(() => import('./Login'))

function App() {

  return (
    <>
      <Switch>

        <Route exact path='/login' render={(props) => <Login {...props}/>}/>
        <Redirect from='*' to='/login'/>
      
      </Switch>
    </>
  )
  
}

export default withRouter(App)