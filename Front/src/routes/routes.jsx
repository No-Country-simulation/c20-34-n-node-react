import { Route, Switch } from "wouter";
import Home from "../pages/Home";
import Login from '../pages/LoginPage';
import Floors from "../pages/FloorsPage";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/floors" component={Floors} />
      <Route>404, Not Found!</Route>
    </Switch>
  );
}

export default Routes;