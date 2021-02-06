import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { LoginProvider } from "../containers/hooks/useLogin/useLogin";

const Login = React.lazy(() => import('./Login'))
const Home = React.lazy(() => import('./Home'))

function App() {

  return (
    <>
      <Switch>

        <LoginProvider>
          <Route exact path='/login' render={(props) => <Login {...props}/>}/>
          <Route exact path='/home' render={(props) => <Home {...props}/>}/>
        </LoginProvider>

        <Redirect from='*' to='/login'/>
      
      </Switch>
    </>
  )
  
}

export default withRouter(App)