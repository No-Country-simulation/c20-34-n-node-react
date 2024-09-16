import { Route, Switch } from "wouter";
import Home from "../pages/Home";
import Login from '../pages/LoginPage';
import Register from '../pages/RegisterPage';
import Development from '../pages/DevelopmentPage'

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/development" component={Development} />
      <Route>404, Not Found!</Route>
    </Switch>
  );
}

export default Routes;