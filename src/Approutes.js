import { Route, Switch } from "react-router";
import routes from "./utils/routes/routes";

const AppRoutes = () => (
  <Switch>
    {routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ))}
  </Switch>
);


export default AppRoutes;