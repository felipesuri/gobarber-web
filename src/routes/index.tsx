import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/Login'
import SingUp from '../pages/SignUp'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/singup" exact component={SingUp} />
  </Switch>
)

export default Routes
