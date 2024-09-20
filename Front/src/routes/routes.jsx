import { Route, Switch } from "wouter";
import Home from "../pages/Home";
import Login from '../pages/LoginPage';
import Register from '../pages/RegisterPage';
import NewProperty from '../pages/NewPropertyPage';
import ContactPage from '../pages/ContactPage';
import Development from '../pages/DevelopmentPage';
import floorsPage from '../pages/FloorsPage';
import Building from '../pages/BuildingPage';

function Routes() {
  return (
    <div>
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/new-property" component={NewProperty} />
      <Route path="/building" component={Building} />
      <Route path="/development" component={floorsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route>404, Not Found!</Route>
    </Switch>
    </div>
  );
}

export default Routes;