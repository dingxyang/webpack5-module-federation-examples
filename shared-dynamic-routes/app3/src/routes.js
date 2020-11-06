import React from "react";
import { Route } from "react-router-dom";

function Comp() {
  const TestPage = React.lazy(() => import("./TestPage"));

  const routes = [
    {
      path: "/test1",
      component: TestPage,
    },
  ];

  return <Route
  path="/test1"
  component={TestPage}
/>;
}

export default Comp;
