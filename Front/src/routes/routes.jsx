import { Route, Switch } from "wouter";
import Home from "../pages/Home";
import Login from '../pages/LoginPage';
import Register from '../pages/RegisterPage';
import NewProperty from '../pages/NewPropertyPage';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/new-property" component={NewProperty} />
      <Route>404, Not Found!</Route>
    </Switch>
  );
}

export default Routes;