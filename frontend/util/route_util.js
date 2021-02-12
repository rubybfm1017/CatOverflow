import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, exact, signedIn}) => (
    <Route
      path={path}
      exact={exact}
      render={props =>
        !signedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );

const Protected = ({ component: Component, path, exact, signedIn }) => (
    <Route
      path={path}
      exact={exact}
      render={props =>
        !signedIn ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
  
  const mapStateToProps = state => {
    return { signedIn: Boolean(state.users.current_user ? state.users.current_user.id != null : false) };
  };
  
  export const AuthRoute = withRouter(
    connect(
      mapStateToProps,
      null
    )(Auth)
  );

  export const ProtectedRoute = withRouter(
    connect(
      mapStateToProps,
      null
    )(Protected)
  );