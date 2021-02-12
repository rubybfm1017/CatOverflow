import React from "react";
import { Route, Switch } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from '../util/route_util'

import HomePageContainer from "./home/homepage";
import SignUpFormContainer from "./users/signup_form_container";
import SignInFormContainer from "./users/signin_form_container";

const App = () => (
  <div>
    <h1>React 1</h1>
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/signin" component={SignInFormContainer} />
    </Switch>
  </div>
);

export default App;
