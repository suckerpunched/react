import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
 
import Layout from '../../component/UI/Layout/Layout';

const UserPage = React.lazy(() => import('../UserPage/UserPage'))

function App() {

  return (
    <Layout>
      <Switch>

        <Route exact path='/userpage' render={(props) => <UserPage {...props}/>}/>
        <Route exact path='/notuserpage' render={(props) => <div>what'd you expect?</div>}/>

        <Redirect from='*' to='/'/>
      
      </Switch>
    </Layout>
  )
  
}

export default withRouter(App)