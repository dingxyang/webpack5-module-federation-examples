import React from "react";


const HomePage = React.lazy(() => import("./HomePage"));
const Child = React.lazy(() => import("./Child"));

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/child",
    component: Child,
  },
];

export default routes;
