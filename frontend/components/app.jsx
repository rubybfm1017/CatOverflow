import React from "react";
import { Route, Switch } from "react-router-dom";

import SignUpFormContainer from "./users/signup_form_container";
import SignInFormContainer from "./users/signin_form_container";

const App = () => (
  <div>
    <h1>React 1</h1>
    <Switch>
      <Route exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={SignInFormContainer} />
    </Switch>
  </div>
);

export default App;
