import React from "react";
import { Route } from "react-router-dom";

function Comp() {
  const AboutPage = React.lazy(() => import("./AboutPage"));
  const HelloPage = React.lazy(() => import("./HelloPage"));

  const routes = [
    {
      path: "/about",
      component: AboutPage,
    },
    {
      path: "/hello",
      component: HelloPage,
    },
  ];

  return routes.map((route) => (
    <Route
      key={route.path}
      path={route.path}
      component={route.component}
      exact={route.exact}
    />
  ));
}

export default Comp;
