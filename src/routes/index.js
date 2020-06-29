import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { useSelector } from "react-redux";

import PrivateRoute from './privateRoute'
import Home from '../Screens/Home'
import Login from '../Screens/Login'
import LandingPage from '../Screens/LandingPage';

const Routes = () => {
  const isAuthenticated = useSelector(state => state.userState.isAuthenticated)
  const isVerifyed = useSelector(state => state.userState.isVerifyed)

  return (
    <Switch>
      <Route path="/landing-page" component={LandingPage}/>
      <PrivateRoute
        exact
        path="/"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifyed={isVerifyed}
      />
      <Route path="/login" component={Login} />
    </Switch>
  )
}

export default Routes