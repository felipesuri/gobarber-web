import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import Login from '../pages/Login'
import SingUp from '../pages/SignUp'

import Dashboard from '../pages/Dashboard'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/singup" exact component={SingUp} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
)

export default Routes
