import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

const Playground = React.lazy(() => import('./Playground'))

function App() {

  return (
    <>
      <Switch>

        <Route exact path='/playground' render={(props) => <Playground {...props}/>}/>
        <Redirect from='*' to='/playground'/>
      
      </Switch>
    </>
  )
  
}

export default withRouter(App)