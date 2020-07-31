import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import Login from '../pages/Login'
import SingUp from '../pages/SignUp'
import ForgotPassword from '../pages/ForgotPassword'

import Dashboard from '../pages/Dashboard'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/singup" exact component={SingUp} />
    <Route path="/forgot-password" exact component={ForgotPassword} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
)

export default Routes
