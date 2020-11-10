import { HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Navigation from "./components/Navigation";
import React from "react";
import localRoutes from "./routes";
import {store} from './redux/store'

const App = () => (
  <Provider store={store}>
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
          </Switch>
        </React.Suspense>
      </div>
    </HashRouter>
  </Provider>
);

export default App;
