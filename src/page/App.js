import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

const Playground = React.lazy(() => import('../container/Playground/Playground'))
const PlaygroundModal = React.lazy(() => import('../container/Playground/PlaygroundModal'))
const PlaygroundForm = React.lazy(() => import('../container/Playground/PlaygroundForm'))

function App() {

  return (
    <>
      <Switch>

        <Route exact path='/playground' render={(props) => <Playground {...props}/>}/>
        <Route exact path='/modal' render={(props) => <PlaygroundModal {...props}/>}/>
        <Route exact path='/form' render={(props) => <PlaygroundForm {...props}/>}/>
        <Redirect from='*' to='/playground'/>
      
      </Switch>
    </>
  )
  
}

export default withRouter(App)