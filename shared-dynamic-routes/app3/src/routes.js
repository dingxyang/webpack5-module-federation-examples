import React from "react";

const TestPage = React.lazy(() => import("./TestPage"));

const routes = [
  {
    path: "/",
    component: TestPage,
    exact: true,
  },
];

export default routes;
