import { HashRouter, Route, Switch } from "react-router-dom";

import Navigation from "./Navigation";
import React, { useEffect, useState } from "react";
import localRoutes from "./routes";

function loadComponent(scope, module) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default");
    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await container.get(module);
    const Module = factory();
    return Module;
  };
}

const App = ({ system }) => {
  const [routeList, setrouteList] = useState(undefined);
  useEffect(() => {
    let routesArr = [];
     system.map((item) => {
      const { routesModules, scope } = item;
      routesModules.map((routeModule) => {
        const Component = React.lazy(loadComponent(scope, routeModule[1]));
        routesArr.push({
          path: routeModule[0],
          component: Component,
          exact: true,
        });
      });
    });
    setrouteList(routesArr);
  }, [system]);

  return (
    <HashRouter>
      <div>
        <h1>App 1</h1>
        <Navigation />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {localRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
            {routeList &&
              routeList.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                />
              ))}
          </Switch>
        </React.Suspense>
      </div>
    </HashRouter>
  );
};

export default App;
