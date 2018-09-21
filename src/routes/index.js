import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import MainPage from '../pages/MainPage'
import AboutPage from '../pages/AboutPage'
import NotFoundPage from '../pages/NotFoundPage'
import LoginPage from '../pages/LoginPage'

export const history = createBrowserHistory()

const Routes = () => (
  <ConnectedRouter history={history}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </HashRouter>
  </ConnectedRouter>
)

export default Routes
