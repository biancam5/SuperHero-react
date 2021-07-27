import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const LoginPrivate = ({ component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      
      render={props =>
        localStorage.token ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  )
}

export default LoginPrivate