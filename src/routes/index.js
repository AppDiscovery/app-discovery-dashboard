import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import NotFoundPage from '../pages/NotFoundPage'
import LoginPage from '../pages/LoginPage'
import DeployPage from '../pages/DeployPage'
import UploadPage from '../pages/UploadPage'

export const history = createBrowserHistory()

const Routes = () => (
  // <ConnectedRouter history={history}>
  //   <HashRouter>
  <Switch>
    <Route exact path="/" component={UploadPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/deploy" component={DeployPage} />
    <Route path="*" component={NotFoundPage} />
  </Switch>
  //   </HashRouter>
  // </ConnectedRouter>
)

export default Routes
