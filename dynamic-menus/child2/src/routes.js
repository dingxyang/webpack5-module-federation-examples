import React from "react";

const TestPage = React.lazy(() => import("./TestPage"));

const routes = [
  {
    path: "/testPage",
    component: TestPage,
  },
];

export default routes;
